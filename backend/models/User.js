//on crée nos schémas de données 


//import
const mongoose = require("mongoose");


//schémas pour les utilisateurs 
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password : {type: String, required: true}
});



//exportS (erreur sans le S à odule.exports ! "TypeError: User is not a constructor")
module.exports = mongoose.model("user", userSchema);