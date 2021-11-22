// tests (à retirer)
console.log(` --------> user-ctrl`);


//-----imports-----//


const User = require("../models/User");//import le modele
const cryptojs = require("crypto-js");//(chiffrage pour emails)
const bcrypt = require("bcrypt");//(hash mdp)
const jwt = require('jsonwebtoken');//token
const dotenv = require("dotenv").config();//import variables d'environnement


//-----exports-----//


//1.signup : on va enregistrer l'utilisateur dans la bdd
exports.signup = (req, res, next) => {
  // console.log("!!!req.body!!!!");
  // console.log(req.body.email);
  // console.log(req.body.password);

  //chiffrage email
  //const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();//si chiffrage mail!
  //console.log(process.env.CRYPTOJS_EMAIL);

  //hashage mdp
  bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        //email: emailCryptoJs,//si chiffrage mail!
        email: req.body.email,//
        password: hash,
      });
      //console.log(user);
      user.save()
        .then(() =>
          res.status(201).json({ message: "Utilisateur créé et sauvegardé" }))
        //.catch((error) => res.status(500).json({error}.send(console.log(error))))
        .catch((error) => res.status(400).json({ error }).send(console.log(error)));//ok?
    })
    .catch((error) => res.status(500).json({ error }));
};


//2.login : 
exports.login = (req,res,next) =>{

  /*console.log("!!!req.body!!!!");
  console.log(req.body.email);
  console.log(req.body.password);*/

  //chiffrage email//
  //const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();//si chiffrage mail!
  //console.log(emailCryptoJs);
  

  //chercher si email existe dans bdd
  //User.findOne({email:emailCryptoJs})//si chiffrage mail!
  User.findOne({email: req.body.email})
  .then(userFound => {
    console.log(userFound);
    if (!userFound){
      return res.status(401).json({error: "Utilisateur inconnu"});//fin
    }
    //si trouvé :
    bcrypt.compare(req.body.password, userFound.password)
    .then(mdpValide => {
      if(!mdpValide){
        return res.status(401).json({error: "Mot de passe incorrect"});//fin
      }
      //si mdp valide
      //res.status(200).json({message : "Mot de passe correct"});
      //il faut renvoyer au front un userid+1token:
      console.log("welcome back user "+userFound._id+" !");
      res.status(200).json({
        userId: userFound._id,
        token: jwt.sign ( {userId: userFound._id} , `${process.env.JWT_KEY_TOKEN}` , {expiresIn:"12h"} )
      });
    })
    .catch(error => res.status(500).json({error}));//error lors comparaison mdp
  })
  .catch(error => res.status(500).json({error}));//error dans le reste du code

};