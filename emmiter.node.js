var events = require('events');

//object
var eventEmitter = new events.EventEmitter();


// Bind the connection event with the handler
eventEmitter.on('connection',  () => {

    //connectHandler

    console.log('connection succesful.');
    eventEmitter.emit('data_received');
 });
 
eventEmitter.on('data_received', () => {
   console.log('data received succesfully.');
});

eventEmitter.emit('connection');

console.log("Program Ended.");