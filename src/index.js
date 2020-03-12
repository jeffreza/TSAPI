const http = require("http");
const WebSocketServer = require("websocket").server;
const httpServer =  http.createServer ((req,res)=> {
    console.log("we have received a request");

});

const websocket = new WebSocketServer({"httpServer": httpServer});
httpServer.listen(8080, ()=> (console.log("my server is listening")));