class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  rotate(num){
      while(num>0){
          this.push(this.shift().value)
          num--
      }
      while(num<0){
        this.unshift(this.pop().value)
        num++
      }
      return this
  }
  push(value){
    let newNode = new Node(value)
    if(this.head===null){
      this.head=newNode;
      this.tail=newNode;
    }
    else if(this.head.next===null){
      this.tail=newNode
      this.head.next=newNode
    }
    else{
      this.tail.next=newNode
      this.tail=newNode
    }
    this.length++;
    return this;
  }
  pop(){
    //we're gonna assume there is no length for added complexity
    let iterator = this.head
    let returnValue = this.head
    
    if(!this.head) return null;
    this.length--;
    if(this.head.next===null){
      returnValue = this.head;
      this.head=null;
      this.tail=null;
      return returnValue
    }
    
    while(iterator.next){
      returnValue = iterator
      iterator=iterator.next;
      }
      returnValue.next = null;
      this.tail=returnValue;
      
      return iterator
    }
  unshift(value){
    let newNode = new Node(value);
    if(this.head===null){this.push(value)}
    else if(this.head.next===null){
      this.head=newNode;
      newNode.next=this.tail;
      this.length++
    }
    else{
      newNode.next=this.head;
      this.head=newNode;
      this.length++;
    }

  }
  shift(){
    if(this.head===null) return null;
    
    else if(this.head===this.tail)
    {
      return this.pop();
    }
    else
    {
      let temp = this.head;
      this.head=this.head.next;
      this.length--
      temp.next=null;
      return temp;
    }
  }
  get(idx){
    if(this.head===null) return null;
    let iterator=this.head;
    while(idx>0 && iterator.next){
      iterator=iterator.next;
      idx--;
    }
    if(idx===0&&this.head==this.tail)return iterator;
    else if(idx!==0) return null;
    else return iterator
  }
  set(idx, value){
    let tochange=this.get(idx);
    if(tochange) tochange.value=value;
    else return null;
    return tochange;
  }
  insert(idx, value){
    if(idx===0 && !this.head) this.push(value);
    let previous = this.get(idx-1);
    if(!previous) return null;
    let newNode = new Node(value);
    if(previous===this.tail)this.tail=newNode
    let temp = previous.next;
    previous.next=newNode;
    newNode.next=temp;
    this.length++;
    return this
  }
  remove(idx){
    if(!this.head)return null;
    if(idx===0 && !this.head.next) {
      let temp = this.head;
      this.head=null;
      this.tail=null;
      this.length=0;
      return temp;
    }
    else{
      let previous = this.get(idx-1)
      if(previous===this.tail) return null;
      if(previous){
        let temp = previous.next;
        if(temp === this.tail){
          this.tail=previous
        }
        previous.next=previous.next.next
        this.length--;
        return temp;
      }
    }
  }
  reverse(){
    if(!this.head || this.head===this.tail) return null;
    let temp = this.head;
    this.head=this.tail;
    this.tail=temp;
    let current=temp.next;
    let prev=temp;
    let next = current.next;
    while(current.next){
      current.next=prev;
      prev=current;
      current=next;
      next=next.next
    }
    current.next=prev;
    prev=current;
    
    this.tail.next=null;
  } 
}


let wowlist = new LinkedList
wowlist.push(5).push(10).push(15).push(20).push(25)
console.log(wowlist)
wowlist.rotate(3)
console.log(wowlist)
console.log(wowlist.head.value)
// console.log(wowlist)
// console.log(wowlist.remove(0))
// wowlist.insert(0, 22)
// console.log(wowlist.remove(0))
// console.log(wowlist)
// wowlist.insert(1, 33)
// console.log(wowlist)
// wowlist.push(1)
// console.log(wowlist.set(1, 55))
// console.log(wowlist)
// console.log(wowlist.get(1))
// console.log(wowlist)
// wowlist.push(2)
// console.log(wowlist)
// wowlist.push(3)
// console.log(wowlist)
// console.log(wowlist.pop())
// console.log(wowlist)
// wowlist.shift(12)
// console.log(wowlist)

// console.log(wowlist.shift())

// console.log(wowlist)
// wowlist.push(31)
// console.log(wowlist)
// wowlist.push(37)
// console.log(wowlist)
// console.log(wowlist.get(3))
// console.log(wowlist.set(3, 55))
// console.log(wowlist)
// console.log(wowlist.length)

// console.log(wowlist.insert(4, 200))

// console.log(wowlist.remove(6))

// wowlist.reverse();
// console.log(wowlist)
// console.log(wowlist.get(0))
// console.log(wowlist.get(1))
// console.log(wowlist.get(2))
// console.log(wowlist.get(3))
// console.log(wowlist.get(4))
// console.log('pre', wowlist)
// console.log('post', wowlist.rotate(1))


