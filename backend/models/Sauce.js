//on crée nos schémas de données pour les sauces


//-----imports-----//
const mongoose = require("mongoose");
//const uniqueValidator = require('mongoose-unique-validator');

//------schémas pour les sauces-----//
const sauceSchema = mongoose.Schema({
  userId : { type: String, required: true },
  name : { type: String, required: true },
  manufacturer : {type: String, required: true},
  description : {type: String, required: true},
  mainPepper : {type: String, required: true},
  imageUrl : {type: String, required: true},
  heat : {type: Number, required: true, min: 1, max: 10},
  likes : {type: Number, required: true, default: 0},
  dislikes : {type: Number, required: true, default: 0},
  usersLiked : {type: Array, required: true, default: []},
  usersDisliked : {type: Array, required: true, default: []}
});

//sauceSchema.plugin(uniqueValidator);

//-----exports-----//
//attention erreur sans le S à module.exportS ! "TypeError: User is not a constructor")
module.exports = mongoose.model("sauce", sauceSchema);


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