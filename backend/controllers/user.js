//import CryptoJS (chiffrage pour emails) et bscript (hash mdp)
const cryptojs = require("crypto-js");
const bcrypt = require("bcrypt");

//import le modele
const User = require("../models/User");
//console.log(User);

//on va enregistrer l'utilisateur dans la bdd

exports.signup = (req, res, next) => {
  // console.log("!!!req.body!!!!");
  // console.log(req.body.email);
  // console.log(req.body.password);

  //chiffrage email
const emailCryptoJs = cryptojs.HmacSHA256(req.body.email, "clépassecretecardanslecode").toString();

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
