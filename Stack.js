class Stack{
  constructor(){
    this.stack = [];
    this.length = 0;
  }
  add(val){
    this.stack.push(val)
    this.length++;
    return this.length;
  }
  remove(){
    this.length--;
    return this.stack.pop();
  }
}

let stacky = new Stack;
stacky.add(15)
console.log(stacky)
console.log(stacky.remove())
console.log(stacky)

class Node{
  constructor(val){
    this.val=val;
    this.next=null;
  }
}
class RealStack{
  constructor(){
    this.last = null;
    this.size = 0;
  }
  push(val){
    let newNode = new Node(val);
    newNode.next = this.last;
    this.last = newNode
    return ++this.size;
  }
  pop(){
    if(!this.last) return null;
    let output = this.last
    this.last = this.last.next;
    output.next = null;
    this.size--;
    return output;
  }

}

let rstack = new RealStack;
rstack.push(22)
console.log(rstack);
rstack.pop()
console.log(rstack);
console.log(rstack.pop())