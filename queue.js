class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}
class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  add(val){
    const newNode = new Node(val);
    if(!this.first){
      this.first = newNode;
      this.last = newNode;
    }
    else{
      this.last.next=newNode
      this.last = newNode;
    }
    return ++this.size;
  }
  remove(){
    if(!this.size) return null;
    else{
      this.size--;
      let temp = this.first;
      this.first = this.first.next;
      if(!this.size)this.last = null;
      temp.next=null;
      return temp;
    }
  }
}

let que  = new Queue;
que.add(11);
console.log(que)
console.log(que.size)
que.add(22);
console.log(que)
console.log(que.remove())
console.log(que)
console.log(que.remove())
console.log(que)
console.log(que.remove())
console.log(que)