class MinBinaryHeap{
    constructor(){
        this.values = [];    
    }
    insert(val){
        let ind = Math.floor((this.values.length-1)/2)
        this.values.push(val)
        let current = 0;
        let oldind = this.values.length-1;
        while(ind>=0){
            
            current = this.values[ind]
            if(current.val<val.val){
                return this;
            }
            else{
                this.values[oldind] = current;
                this.values[ind]=val
                oldind = ind;
                ind = Math.floor((ind-1)/2)
            }
        }
        
        return this.values;
    }
    extractMax(){
        let temp = this.values[0]
        this.values[0]=this.values[this.values.length-1]
        this.values[this.values.length-1] = temp;
        const maxOutput = this.values.pop();
        let ind = 0;
        let childInd = 0;
        while(ind*2+1<this.values.length-1){
            let comparator = Math.min(this.values[ind*2+1].val, this.values[ind*2+2].val)
            if(this.values[ind].val<comparator.val) break;
            else{
              
                temp = comparator
                childInd = this.values.indexOf(comparator);
                this.values[childInd] = this.values[ind];
                this.values[ind] = temp;
                ind=childInd;
            }
        }
        return maxOutput;
    }
}

let minh = new MinBinaryHeap;
minh.insert({val: 5, msg: "wow"})
minh.insert({val: 1, msg: "wow"})
minh.extractMax()
minh.values