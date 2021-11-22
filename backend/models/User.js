// tests (à retirer)
console.log(` --------> User Schema`);


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

module.exports = mongoose.model("user", userSchema);//plutot User?