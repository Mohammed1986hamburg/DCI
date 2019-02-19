var http = require('http'); //To include the HTTP module, use the require() method  

// Use the createServer() method to create an HTTP server object
http.createServer(function (req, res) { 

  // is called to write the header of the respons
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  //print of This object has a property called "url" which holds the part of the url that comes after the domain name
  res.write(req.url); 

  // res.write('Hello World!'); //write a response to the client
  res.end(); //end the response

}).listen(8080); //the server object listens on port 8080