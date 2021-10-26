//-----imports-----//
//import le modele
const User = require("../models/Sauce");
//console.log(User);




//-----exports-----//

/*
//1.getAllSauces : afficher toutes les sauces
exports.getAllSauces = (req,res,next) =>{
  console.log("from getAllSauces");
}
*/

/*
//2.getOneSauce : afficher une seule sauce
exports.getOneSauce = (req,res,next) =>{
  console.log("from getAllSauces");
}
*/

//3.createSauce : créer une sauce
exports.createSauce = (req,res,next) =>{
  console.log("from createSauce");
  console.log("!!!req.body!!!!");
  res.status(222).json({message : "special222"})
}

/*
//4.modifySauce : modifier une sauce
exports.modifySauce = (req,res,next) =>{
  console.log("from getAllSauces");

}
*/

/*
//5.deleteSauce : supprimer une sauce
exports.deleteSauce = (req,res,next) =>{
  console.log("from getAllSauces");
}
*/

/*
//6.likeDislikeSauce : supprimer une sauce
exports.likeDislikeSauce = (req,res,next) =>{
  console.log("from getAllSauces");
}
*/