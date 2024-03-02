// Importing event module
const event = require("events");
// Create an instance of the event emitter class
const myEmitter = new event();
const myEventHandler = () =>{
console.log("I am Listening");
}
myEmitter.on('customEventWithData', (data) => {
console.log('Custom event with data:', data);
});
// Emit the custom event with data
myEmitter.emit('customEventWithData', "Hello World");
myEmitter.on("myCustomEvent", myEventHandler);
myEmitter.emit("myCustomEvent");
