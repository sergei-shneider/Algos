const util = require('util')
class Node {
  constructor(value){
    this.value  = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  insert(val){
    const newNode = new Node(val)
    if(!this.root){
      this.root = newNode
    }
    else{
      let toCheck = this.root;
      while(true){
      if(val>=toCheck.value){
        if(toCheck.right) toCheck = toCheck.right;
        else {
          toCheck.right = newNode
          break;
        }
      }
      else if(val<toCheck.value){
        if(toCheck.left) toCheck = toCheck.left;
        else {
          toCheck.left = newNode; 
          break;
      }
    }
    }
    }
    return this;
  }
  find(val){
    let toCheck = this.root;
    while(true){
      if(toCheck.value===val) return toCheck;
      else if(toCheck.value<val){
        if(toCheck.right) toCheck = toCheck.right
        else return undefined
      }
      else{
        if(toCheck.left) toCheck = toCheck.left
        else return undefined;
      }
    }
  }
  breadthFirstSearch(val){
      let queue = []
      let output = []
      if(val) queue.push(this.find(val))
      else if(this.root) queue.push(this.root)
      while(queue.length){
          let thisNode = queue.shift();
          if(thisNode.left) queue.push(thisNode.left)
          if(thisNode.right) queue.push(thisNode.right)
          if(thisNode.value!==val) output.push(thisNode.value)
      }
      return output;
  }
  remove(val){
    let toCheck = this.root;
    let temp = this.root;
    let found = 0
    let reInsert = this.DFSPostOrder(this.find(val))
    if(this.root.value === val){
      this.root = null;
      found = 1;
    } 
    
    while(!found){
      if(toCheck.value<val){
        if(toCheck.right){
          if(toCheck.right.value === val){
            console.log(toCheck.right.value)
              temp = toCheck.right;
              toCheck.right = null;
              found = 1;
          }else{
              toCheck = toCheck.right
          }  
        } 
        else return undefined
      }
      else{
         if(toCheck.left){
          if(toCheck.left.value === val){
              temp = toCheck.left;
              toCheck.left = null;
              found = 1;
          }else{
              toCheck = toCheck.left
          }  
        } 
        else return undefined;
      }
    }
    console.log(reInsert)
    reInsert.slice(0, reInsert.length-1).forEach(x => this.insert(x))
    
    return temp;
  }
  DFSPreOrder(val) {
      let output = [];
      let current = val || this.root
      this.traverse(current, output, 'preorder')
      
      return output;
  }
  DFSInOrder(val) {
      let output = [];
       let current = val || this.root
      this.traverse(current, output, 'inorder')
      return output;
  }
  DFSPostOrder(val) {
      let output = []
      let current = val || this.root
      this.traverse(current, output, 'postorder')
      return output
  }
  traverse(node, output, order){
     if(order==='preorder') output.push(node.value)
     if(node.left) this.traverse(node.left, output, order)
     if(order==='inorder') output.push(node.value)
     if(node.right) this.traverse(node.right, output, order)
     if(order==='postorder') output.push(node.value)
    return 
  }
  findSecondLargest(node){
      if(!this.root) return undefined;
      let secondlargest = this.root;
      let current = node || this.root;
      while(current.right){
          secondlargest = current;
          current = current.right;
      }
      if(current.left){
          return Math.max(secondlargest.value, this.findSecondLargest(current.left).value)
      }
      else {
          return secondlargest.value
      }
  }

   isBalanced(val){
      let current = val || this.root;
      let left = 0;
      let right = 0;
     function minDepth(node){
       if(node === null) return 0;
       return 1+Math.min(minDepth(node.left), minDepth(node.right))
     }
     function maxDepth(node){
       if(node === null) return 0;
       return 1+Math.max(maxDepth(node.left), maxDepth(node.right))
     }
     return maxDepth(current)-minDepth(current)<2
    }
}







let Bins = new BST;
//Bins.insert(15).insert(20).insert(10).insert(12)
Bins.insert(10)
Bins.insert(12)
Bins.insert(5)
Bins.insert(3)
Bins.insert(8)
//Bins.insert(11)
Bins.insert(13).insert(1).insert(4).insert(6).insert(9)
console.log(Bins.isBalanced())
console.log(util.inspect(Bins, {depth: null}))


// console.log(Bins.find(12))
// console.log(Bins.remove(12))
// console.log(Bins.find(12))