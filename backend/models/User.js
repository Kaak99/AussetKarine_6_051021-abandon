//on crée nos schémas de données pour les utilisateurs


//-----imports-----//
const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

//------schémas pour les utilisateurs-----//
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password : {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

//-----exports-----//
//attention erreur sans le S à module.exportS ! "TypeError: User is not a constructor")
module.exports = mongoose.model("user", userSchema);//plutot User?