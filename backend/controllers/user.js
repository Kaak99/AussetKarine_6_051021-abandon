//import CryptoJS (chiffrage pour emails) et bscript (hash mdp)
const cryptojs = require("crypto-js");
const bcrypt = require("bcrypt");

const jwt = require('jsonwebtoken');

//import variables d'environnement 
const dotenv = require("dotenv");
const result = dotenv.config();


//import le modele
const User = require("../models/User");
//console.log(User);

//1.signup : on va enregistrer l'utilisateur dans la bdd
exports.signup = (req, res, next) => {
  // console.log("!!!req.body!!!!");
  // console.log(req.body.email);
  // console.log(req.body.password);

  //chiffrage email
const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();
//console.log(process.env.CRYPTOJS_EMAIL);

  //hashage mdp
  bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: emailCryptoJs,
        password: hash,
      });
      console.log(user);

      user
        .save()
        .then(() =>
          res.status(201).json({ message: "Utilisateur créé et sauvegardé" })
        )
        //.catch((error) => res.status(500).json({error}.send(console.log(error))))
        .catch((error) => res.status(500).json({ error }).send(console.log(error)));
    })
    .catch((error) => res.status(500).json({ error }));
};


//2.login : 
exports.login = (req,res,next) =>{

  console.log("!!!req.body!!!!");
  console.log(req.body.email);
  console.log(req.body.password);

    //chiffrage email
  const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, `${process.env.CRYPTOJS_EMAIL}`).toString();
  console.log(emailCryptoJs);

  //chercher si email existe dans bdd
  User.findOne({email:emailCryptoJs})
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
      res.status(200).json({
        userId: userFound._id,
        token: jwt.sign({userId: userFound._id},`${process.env.JWT_KEY_TOKEN}`,{expiresIn:"12"})
      });
    })
    .catch(error => res.status(500).json({error:'error1'}));//error lors comparaison mdp
  })
  .catch(error => res.status(500).json({error:'error2'}));//error dans le reste du code



};