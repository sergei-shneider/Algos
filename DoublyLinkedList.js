class Node{
    constructor(val){
        this.val = val;
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        //console.log('valuein', val)
        const newNode = new Node(val)
        this.length++;
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else if(this.head===this.tail){
            this.tail=newNode;
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        else{
          //  console.log('wow')
            this.tail.next=newNode;
            newNode.prev = this.tail;
            this.tail=newNode
        }
        //console.log(this.tail.val)
        return this;
    }
    unshift(val){
        const newNode = new Node(val);
        this.length++;
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else if(!this.head.next){
            this.head = newNode;
            this.head.next = this.tail;
            this.tail.prev = this.head;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        return this
    }
    shift(){
       // console.log('head val', this.head.val)
        if(!this.head) return undefined;
        else{
            this.length--;
            let temp = this.head;
        if(!this.head.next){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = this.head.next;
            this.head.prev = null;
        } 
       //if(this.head.val) console.log('new head val', this.head.val)
      //  console.log('unshifted val', temp.val)
        return temp;
        }
       
    }
    get(idx){
        if(!this.head) return null;
        else
        {
            if(idx===0){
                return this.head;
            }
            else if(!this.head.next){
                return null;
            }
            else{
                let temp = this.head;
                while(idx&&temp.next){
                    
                    temp=temp.next;
                    //console.log(idx, temp.val)
                    idx--;
            }
            if(idx===0) return temp;
            else return null;
        }
    }
    }
    set(idx, value){
        if(!this.head) return false;
        else{
            let tochange = this.get(idx)
           
            if(tochange){
                // console.log(tochange.val)
                tochange.val = value;
              // console.log(tochange.val)
                return true
            }
            else return false
        }
    }
    remove(idx){
        //console.log(idx)
        if(!this.head) return undefined;
        else{
            this.length--;
            let temp = this.head;
            if(idx===0 && !this.head.next){
                this.head = null;
                this.tail = null;
            }
            else{
                temp = this.get(idx);
                
                if(!temp){
                    this.length++;
                return undefined;}
                else if(!temp.next){
                    this.tail = this.temp.prev;
                    this.tail.next = null;}
                else if(idx===0){
                    this.head = temp.next;
                    this.head.prev = null;
                }
                else{
              
                temp.prev.next = temp.next;
                temp.next.prev=temp.prev;}
            }
            return temp;
        }
    }
    pop(){
        if(!this.head) return undefined;
        this.length--;
        let temp=this.head;
        if(!this.head.next){
            this.head=null;
            this.tail=null;
        }
        else{
            while(temp.next){
                temp=temp.next;
            }
            temp.prev.next=null;
            this.tail = temp.prev;
        }
        return temp;
    }
    insert(idx,value){
        let newNode = new Node(value)
        
        if(!this.head){
            if(idx===0) this.unshift(value);
            else return false;
        }
        else{
            let inPoint = this.get(idx-1);
            if(!inPoint) return false
            else if((!this.head.next && idx === 1)||this.tail === inPoint) this.push(value)
            else{
                inPoint.next.prev = newNode;
                newNode.next=inPoint.next;
                newNode.prev = inPoint;
                inPoint.next=newNode;
            }
        }
        return true;
    }
    reverse(){
        if(!this.head || !this.head.next) return this;
        let tempHead = this.head;
        let tempTail = this.tail;
        let temp = this.tail;
        while(temp.prev){
            let tempPt = temp.prev;
            temp.prev=temp.next;
            temp.next=tempPt;
            temp=tempPt;
        }
        this.head = tempTail;
        this.tail = tempHead;
        return this
    }
}
