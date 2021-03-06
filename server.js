const { resolveNaptr } = require('dns');
const http = require('http'); // import the htt library

http.createServer((request, response) =>{ // create serve with a resquet and a response
    response.writeHead(200, { 'Content-Type': 'application/json' }); // send a response with a type and the type of the content
    
 // Find route in the request
    if (request.url === "/produtos"){
      response.end(JSON.stringify({
        message: "rota dos produtos"
      }));
    }
    if (request.url === "/usuario"){
      response.end(JSON.stringify({
        message : "rota do usuario"
      }));
    }
    // if not found send this message
      response.end(JSON.stringify({
        message : "rota nao encontrada" 
      }));
    
}).listen(4001, () => console.log('serve running in port 4001')); // when the port being listen recive something will be redirect to here