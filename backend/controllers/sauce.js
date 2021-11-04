// tests (à retirer)
console.log(` --------> sauce-ctrl`);

//-----imports-----//

const Sauce = require("../models/Sauce");//import le modele
const fs = require('fs');//package fs de node


//-----exports-----//

//1.getAllSauces : afficher toutes les sauces
exports.getAllSauces = (req,res,next) =>{
  //console.log("from getAllSauces");
  
  Sauce.find()
    .then(sauce => res.status(200).json(sauce))
    .catch(error => res.status(400).json({ error }));
};



//2.getOneSauce : afficher une seule sauce
exports.getOneSauce = (req,res,next) =>{
  //console.log("from getOneSauce");
  Sauce.findOne({ _id: req.params.id })
  .then(sauce => res.status(200).json(sauce))
  .catch(error => res.status(404).json({ error }));
}


//3.createSauce : créer une sauce
exports.createSauce = (req,res,next) =>{
  //console.log("from createSauce");
  //console.log("!!!req.body!!!!");
  const sauceObject = JSON.parse(req.body.sauce);
  const sauce = new Sauce({
    ...sauceObject,
    imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });

  sauce.save()
    .then(() =>
      res.status(201).json({ message: "Sauce créée et sauvegardée" }))
    .catch((error) => res.status(400).json({ error }));
};


//4.modifySauce : modifier une sauce
exports.modifySauce = (req,res,next) =>{
  //console.log("from modifySauce");
  Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
  .then(() => res.status(200).json({ message: 'Objet modifié !'}))
  .catch(error => res.status(400).json({ error }));
}
//histoire de l'id pas nécessaire??


//5.deleteSauce : supprimer une sauce
exports.deleteSauce = (req,res,next) =>{
  //console.log("from getAllSauces");
  Sauce.findOne({ _id: req.params.id })
    .then(sauce => {
      const filename = sauce.imageUrl.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Sauce.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};


/*
//6.likeDislikeSauce : supprimer une sauce
exports.likeDislikeSauce = (req,res,next) =>{
  console.log("from getAllSauces");
}
*/









/*
const sauce = new Sauce({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });


  const sauce = new Sauce({
    ...req.body
  });

*/