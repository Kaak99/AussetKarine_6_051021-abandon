// tests (à retirer)
console.log(` --------> tests.app`);
console.log(` tests.app `);

// packages import

const express = require("express");
//console.log(express);

const app = express();
//console.log(app);

const morgan = require('morgan');
//console.log(morgan);



// route générale 
app.use(morgan("dev"));

app.use((req,res,next) =>{
  console.log("yo");
  next();
});

app.use((req,res,next) =>{
  console.log("yo2");
  next();
});

app.use((req,res) =>{
  res.status(201);
  res.json({"mon message" : "bonne réception du paquet"});
});


//export
module.exports = app;







/*
// route générale 
app.use((req,res,next) =>{
  console.log("yo");
  next();
});

app.use((req,res,next) =>{
  console.log("yo2");
  next();
});

app.use((req,res,next) =>{
  res.status(201);
  next();
});

app.use((req,res) =>{
  res.json({"mon message" : "bonne réception du paquet"});
});
*/