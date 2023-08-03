const server = require("./modules/createHttpServer.js")();

const httpServer = require("./modules/httpServer.js");

server.on("request", httpServer);

//server.listen("1327");
server.listen(1327,()=>{
    console.log("listen on port 1327")
 });

server.on('timeout', (msg)=>{
   
});
