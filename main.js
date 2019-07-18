// Console log when running node
console.log('Hello World!');


// Create a locally hosted server
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

// Require express framework
var express = require('express');
console.log(express);


// Require file system
var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");


// Exemplify non-blocking
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("Program Ended");

// Event Loop

// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
// Create an event handler as follows
var connectHandler = function connected() {
   console.log('connection succesful.');

   // Fire the data_received event
   eventEmitter.emit('data_received');
}
// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);
// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function() {
   console.log('data received succesfully.');
});
// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");

// readFile async function
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
   if (err) {
      console.log(err.stack);
      return;
   }
   console.log(data.toString());
});
console.log("Program Ended");
