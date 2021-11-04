// tests (à retirer)
console.log(` --------> app.js`);

// packages import

const express = require("express");

const path = require('path');//pour acces au chemin des fichiers

const morgan = require('morgan');//log requetes

const userRoutes = require('./routes/user');//routes user
const sauceRoutes = require('./routes/sauce');//routes sauce

const mongoose = require('./db/db');//bdd


const app = express();//express//


// -----------route générale : ---------------//

//MORGAN (module qui log req et res)
app.use(morgan("dev"));


//CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(express.json());//bodyparser

app.use('/images' , express.static(path.join(__dirname, 'images')));//appel pour multer(chemin images)

app.use('/api/sauces',sauceRoutes );
app.use('/api/auth',userRoutes );

//export
module.exports = app;












/*
// route générale 
app.use(morgan("dev"));

app.use((req,res,next) =>{
  console.log("yo");
  next();
});

app.use((req,res,next) =>{
  //console.log("afficher req :");
  //console.log(req);
  console.log("yo2");
  next();
});

app.use((req,res) =>{
  res.status(201);
  res.json({"mon message" : "bonne réception du paquet"});
});
*/