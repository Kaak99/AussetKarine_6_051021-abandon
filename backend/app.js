// tests (à retirer)
console.log(` --------> tests.app`);
console.log(` tests.app `);

// packages import

const express = require("express");
//console.log(express);

const app = express();
//console.log(app);



// route générale 
app.use((req,res,next) =>{
  console.log("yo");
  next();
});

app.use((req,res,next) =>{
  console.log("yo2");
  next();
});

app.use((req,res) =>{
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

app.use((req,res) =>{
  res.json({"mon message" : "bonne réception du paquet"});
});
*/