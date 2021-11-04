//mongodb+srv://master:<password>@cluster0.vd2gi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//mongodb+srv://master:master-mdp@cluster0.vd2gi.mongodb.net/maBdd?retryWrites=true&w=majority

// tests (à retirer)
console.log(` --------> user-db`);

//import variables d'environnement 
const dotenv = require("dotenv").config();


// import mongoose
const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://master:master-mdp@cluster0.vd2gi.mongodb.net/maBdd?retryWrites=true&w=majority')
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.then(()=> console.log("connexion à mongoDb réussie ! "))
.catch(()=> console.log("connexion à mongoDb = échec ! "))



//export
module.exports = mongoose;



//??mongoose.connect('mongodb+srv://master:master-mdp@cluster0.vd2gi.mongodb.net/maBdd?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifyTopology:true})
