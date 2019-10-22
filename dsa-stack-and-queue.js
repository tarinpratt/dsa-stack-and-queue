class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}
function main() {
const starTrek = new Stack;
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')
starTrek.pop()
starTrek.pop()
starTrek.pop()
// starTrek.pop('McCoy')
return starTrek;
}
console.log(main())

const stack = main()
console.log("STACK", stack)

function peek(stack) {
    if(stack.top === null) {
        return 'stack is empty'
    }
   return stack.top.data;
}
console.log('peek', peek(stack))

function isEmpty(stack) {
    if(stack.top === null) {
        return 'Stack is empty'
    } else {
        
        if(stack.top !== null) {
            return 'items in stack'
        }
    }
}

console.log(isEmpty(stack))

function display(stack) {
    if(stack.top === null) {
        return 'stack is empty'
    }
    let node = stack.top;
    let string = '';
    while(node !== null) {
        string += node.data
        if(node.next !== null) string += '->';
        node = node.next
    }
    return string
}

console.log("display", display(stack))

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let reverse = new Stack();
    for(let i = 0; i < s.length; i++){
        reverse.push(s.charAt(i));        
    }
    for(let j = 0; j< s.length; j++){
        if(s[j] === reverse.pop()) continue;
        else return false;
    }
    return true;
}
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


function parentheses(str) {
    const newStack = new Stack();
    for(let i = 0; i < newStack.length; i++) {
        if(str[i] === '(' || str[i] === '[' || str[i] === '{') {
            newStack.push(str[i]);
        }
        if(str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if(peek(newStack) === '(' && str[i] === ')')
            newStack.pop()
        }
        if(str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if(peek(newStack) === '[' && str[i] === ']')
            newStack.pop()
        }
        if(str[i] === ')' || str[i] === ']' || str[i] === '}') {
            if(peek(newStack) === '{' && str[i] === '}')
            newStack.pop()
        }
    }  
    if(!newStack) {
        return false
    } else {
        return true
    }
}
console.log(parentheses('(([[()'))

function sortStack(input, tempStack = null, temp = null) {
    if(tempStack === null) {
        tempStack = new Stack();
    }
    if(input.top === null) {
        input = tempStack;
        return input;
    }
    temp = input.pop();
    if( tempStack.top === null || temp < tempStack.top.data) {
        return sortStack(input, tempStack);
    } else {
        while(tempStack.top !== null && temp > tempStack.top.data) {
            input.push(tempStack.pop())
        }
        tempStack.push(temp)
        return sortStack(input, tempStack)
    }

}
const testStack = new Stack();

    testStack.push(5);
    testStack.push(3);
    testStack.push(9);
    testStack.push(22);
    testStack.push(1);
    const sorted = sortStack(testStack, tempStack = null, temp = null)
    const displayStack = display(sorted)
console.log("display", sorted)

