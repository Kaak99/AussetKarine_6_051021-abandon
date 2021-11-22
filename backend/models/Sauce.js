//on crée nos schémas de données pour les sauces


//-----imports-----//
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

//------schémas pour les sauces-----//
const sauceSchema = mongoose.Schema({
  userId : { type: String, required: true },
  name : { type: String, required: true },
  manufacturer : {type: String, required: true},
  description : {type: String, required: true},
  mainPepper : {type: String, required: true},
  imageUrl : {type: String, required: true},
  heat : {type: Number, required: true},
  likes : {type: Number, required: true},
  dislikes : {type: Number, required: true},
  usersLiked : {type: Array, required: true},
  usersDisliked : {type: Array, required: true}
});

sauceSchema.plugin(uniqueValidator);

//-----exports-----//
//attention erreur sans le S à module.exportS ! "TypeError: User is not a constructor")
module.exports = mongoose.model("sauce", sauceSchema);//Sauce plutot?


/*
const sauceSchema = mongoose.Schema({
  userId : { type: String, required: true, unique: true },
  name : { type: String, required: true },
  manufacturer : {type: String, required: true},
  description : {type: String, required: true},
  mainPepper : {type: String, required: true},
  imageUrl : {type: String, required: true},
  heat : {type: Number, required: true},
  likes : {type: Number, required: true},
  dislikes : {type: Number, required: true},
  usersLiked : {type: Array, required: true},
  usersDisliked : {type: Array, required: true}
});
*/