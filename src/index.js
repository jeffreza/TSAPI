/*const http = require("http");
const WebSocketServer = require("websocket").server;
connection = null;
const httpserver = http.createServer((req, res) => {
  console.log("we have received a request");
});

const websocket = new WebSocketServer({ httpServer:httpserver });
httpserver.listen(8080, () => console.log("my server is listening"));

websocket.on("request", request =>{
    connection = request.accept(null, request.origin);
    connection.on("onopen", () => console.log("open connection") );
    connection.on("onclose", () => console.log("close connection") );
    connection.on("onmessage", messag =>
    {console.log(`I received: ${message}`)}  );
 });*/