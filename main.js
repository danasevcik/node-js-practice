// First - test to see console log when running node
console.log('Hello World!');


// Second test to see if we can create a locally hosted server
var http = require("http");
// console.log(http);

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status 200

   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello World! This is my first node server!');
}).listen(8081);
// Listen on port 8081

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

// Third test to require express framework
var express = require('express');
console.log(express);


// Fourth test to require file system
var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");
