//-----imports-----//
//import le modele
const Sauce = require("../models/Sauce");
const User = require("../models/Sauce");
//console.log(User);




//-----exports-----//


//1.getAllSauces : afficher toutes les sauces
exports.getAllSauces = (req,res,next) =>{
  console.log("from getAllSauces");
  
  Sauce.find()
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(400).json({ error }));
};



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


  const sauce = new Sauce({
    ...req.body
  });

  console.log(sauce);

  sauce.save()
    .then(() =>
      res.status(201).json({ message: "Sauce créée et sauvegardée" })
    )
    //.catch((error) => res.status(500).json({error}.send(console.log(error))))
    .catch((error) => res.status(400).json({ error }));
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