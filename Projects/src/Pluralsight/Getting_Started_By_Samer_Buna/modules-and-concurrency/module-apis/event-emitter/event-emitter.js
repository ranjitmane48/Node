const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

setImmediate(()=> {
    myEventEmitter.emit('TEST_EVENT');
});


myEventEmitter.on('TEST_EVENT', ()=> {
    console.log('TEST_EVENT was fired');
})

myEventEmitter.on('TEST_EVENT', ()=> {
    console.log('TEST_EVENT was fired');
})

myEventEmitter.on('TEST_EVENT', ()=> {
    console.log('TEST_EVENT was fired');
})

