//import le modele
//const mongoose = require("mongoose"); 
const User = require('../models/User');
//console.log(User);

//on va enregistrer l'utilisateur dans la bdd

exports.signup = (req,res,next)=>{
  console.log("!!!req.body!!!!");
  console.log(req.body);
  console.log(req.body.email);
  console.log(req.body.password);

  //le problème démarre ici
  const user = new User({
    email : req.body.email,
    password : req.body.password
  });
  console.log(user);

  user.save()
  .then(() => res.status(201).json({ message : "Utilisateur créé et sauvegardé"}))
  //.catch((error) => res.status(500).json({error}.send(console.log(error))))
  .catch((error) => res.status(501).json({error}))


};