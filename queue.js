class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
    }
    enqueue(data) {
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
    }
    dequeue() {
        //if the queue is empty, there is nothing to return
       if (this.first === null) {
           return;
       }
       const node = this.first;
       this.first = this.first.next;
        //if this is the last item in the queue
       if (node === this.last) {
           this.last = null;
       }
       return node.value;
   }
}

function q() {
    const starTrekQ = new Queue;
    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')
    starTrekQ.dequeue('Spock')
    return starTrekQ
}

const Q = q()

function peek(Q) {
    if(Q.first === null) {
        return console.log('no items in Queue')
    }
    return Q.first.value
}
console.log("PEEK", peek(Q))

function isEmpty(Q) {
    if(Q.first === null) {
        return console.log('Queue is empty')
    }else {
        return console.log('Queue has items')
    }
}

console.log(isEmpty(Q))

function display(Q) {
    if(Q.first === null) {
        return console.log('Queue is empty') 
    } else if (Q.first !== null) {
        let prev = Q.first
        let current = Q.first.next
        let next = Q.first.next.next
        console.log(prev.value, current.value, next.value)
        if(next !== null)  {
            prev = next.next 
            console.log(prev.value)    
        }
        
    } 
}
console.log(display(Q))


function Node(value) {
    this.data = value;
    this.previous = null;
    this.next = null;
}