// tests (à retirer)
console.log(` --------> tests `);
console.log(` tests `);

// packages import

const http = require("http");
//console.log(http);
const app = require("./app.js");
//console.log(app);



// param du port
app.set("port", 3000);

//create server
const server = http.createServer(app);

//écoute le port 3000
server.listen(3000);





