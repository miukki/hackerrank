// Goal: Implement EventEmitter class (pretty much the same as Node.js has)

// In sake of time only the basic methods could be implemented:

// - on
// - emit
// - off

// const emitter = new EventEmitter();

// emitter.on('event', (a, b) => {
//   console.log(a + b);
// })
// // 5
// emitter.emit('event', 3, 2);

class Emitter {
    constructor(){
      this.event = {}
    }
    on(eventname, cb) {
      this.event = {
        [eventname]: [].concat(this.event[eventname] || [] , cb)
      }
    }
    off(eventname) {
      this.event = {
        [eventname]: undefined
      }
    }
    emit(eventname, ...arg) {
      
      if (Object.prototype.toString.call(this.event[eventname]) === '[object Array]')     {
          this.event[eventname].map(fn => fn.apply(this, arg))
      }
    }
  }
  
  const emitter = new Emitter()
  
  
  emitter.on('event', (a,b) => console.log(a+b) )
  emitter.on('event', (a,b) => console.log(a-b) )
  emitter.emit('event', 3, 2);
  emitter.off('event')
  emitter.emit('event', 0, 0);
