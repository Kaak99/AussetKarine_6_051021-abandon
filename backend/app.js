// tests (à retirer)
console.log(` --------> tests.app`);
console.log(` tests.app `);

// packages import

const express = require("express");
//console.log(express);

const morgan = require('morgan');
//console.log(morgan);

const mongoose = require('./db/db');
//console.log(mongoose);

//const bodyParser = require('body-parser');
//console.log(bodyParser);

const path = require('path');

const userRoutes = require('./routes/user');
//console.log(userRoutes);
const sauceRoutes = require('./routes/sauce');

//creer appli express?
const app = express();
//console.log(app);


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


//bodyParser (transfo body json en objet?)
//app.use(bodyParser.json());
app.use(express.json());
//console.log(bodyParser);


app.use('/images', express.static(path.join(__dirname, 'images')));



//authentification
app.use('/api/auth',userRoutes );

//sauces?
app.use('/api/sauces',sauceRoutes );

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