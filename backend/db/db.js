// tests (à retirer)
console.log(` --------> db`);

//import variables d'environnement 
const dotenv = require("dotenv").config();


// import mongoose
const mongoose = require('mongoose');

// connection bdd
/*mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(()=> console.log("connexion à mongoDb réussie ! "))
.catch(()=> console.log("connexion à mongoDb = échec ! "))
*/

mongoose.connect('mongodb+srv://master:master-mdp@cluster0.vd2gi.mongodb.net/maBdd?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



//export
module.exports = mongoose;


