//on crée nos schémas de données 


//import
const mongoose = require("mongoose");


//schémas pour les utilisateurs 
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password : {type: String, required: true}
});



//export
module.exports = mongoose.model("user", userSchema);