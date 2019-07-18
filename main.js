// // Console log when running node
// console.log('Hello World!');
//
//
// // Create a locally hosted server
// var http = require("http");
// // console.log(http);
//
// http.createServer(function (request, response) {
//    // Send the HTTP header
//    // HTTP Status 200
//
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // Send the response body as "Hello World"
//    response.end('Hello World! This is my first node server!');
// }).listen(8081);
// // Listen on port 8081
//
// // Console will print the message
// console.log('Server running at http://127.0.0.1:8081/');
//
// // Require express framework
// var express = require('express');
// console.log(express);
//
//
// // Require file system
// var fs = require("fs");
// var data = fs.readFileSync('input.txt');
//
// console.log(data.toString());
// console.log("Program Ended");
//
//
// // Exemplify non-blocking
// var fs = require("fs");
//
// fs.readFile('input.txt', function (err, data) {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });
//
// console.log("Program Ended");
//
// // Event Loop
//
// // Import events module
// var events = require('events');
// // Create an eventEmitter object
// var eventEmitter = new events.EventEmitter();
// // Create an event handler as follows
// var connectHandler = function connected() {
//    console.log('connection succesful.');
//
//    // Fire the data_received event
//    eventEmitter.emit('data_received');
// }
// // Bind the connection event with the handler
// eventEmitter.on('connection', connectHandler);
// // Bind the data_received event with the anonymous function
// eventEmitter.on('data_received', function() {
//    console.log('data received succesfully.');
// });
// // Fire the connection event
// eventEmitter.emit('connection');
//
// console.log("Program Ended.");
//
// // readFile async function
// var fs = require("fs");
//
// fs.readFile('input.txt', function (err, data) {
//    if (err) {
//       console.log(err.stack);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("Program Ended");

var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
// NUMBER 3
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// listener #2
// NUMBER 4
// NUMBER 7
var listner2 = function listner2() {
   console.log('listner2 executed.');
}

// Bind the connection event with the listner1 function
eventEmitter.addListener('connection', listner1);

// Bind the connection event with the listner2 function
eventEmitter.on('connection', listner2);

// NUMBER 8
var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Fire the connection event
// NUMBER 1
eventEmitter.emit('connection');

// Remove the binding of listner1 function
// NUMBER 5
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 will not listen now.");

// Fire the connection event
// NUMBER 6
eventEmitter.emit('connection');

// NUMBER 2
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");


// NUMBER 9
console.log("Program Ended.");
