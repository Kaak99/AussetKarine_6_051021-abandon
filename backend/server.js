// tests (à retirer)
console.log(` --------> tests `);
console.log(` tests `);

// packages import

const http = require("http");
//console.log(http);
const app = require("./app.js");
//console.log(app);
const dotenv = require("dotenv");
//console.log(dotenv);
//const result = dotenv.config();





// param du port
//app.set("port", 3000);
app.set("port", process.env.PORT);

//create server
const server = http.createServer(app);

//écoute le port 3000
server.listen(3000);





