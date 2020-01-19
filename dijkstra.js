export default class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vert){
    if(this.adjacencyList[vert]) return 0;
    this.adjacencyList[vert] = [];
  }
    addEdge(vertex1, vertex2, weight) {
    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return 0;
    this.adjacencyList[vertex1].push({[vertex2]:weight})
    this.adjacencyList[vertex2].push({[vertex1]:weight})
    }
    _spliceOut(vertex1, vertex2){
        let vertObj;
        this.adjacencyList[vertex1].forEach(x=>{
          if(Object.keys(x)[0]===vertex2)
          vertObj = x;
        })
        let ind4spl = this.adjacencyList[vertex1].indexOf(vertObj)
        if(ind4spl!==-1){
             this.adjacencyList[vertex1].splice(ind4spl, 1)
         }
    }
    removeEdge(vertex1, vertex2){
         if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return 0;
        this._spliceOut(vertex1, vertex2)
        this._spliceOut(vertex2, vertex1)
    }
    removeVertex(vert){
        if(!this.adjacencyList[vert]) return 0;
        this.adjacencyList[vert].forEach(x => this._spliceOut(x, vert))
        delete this.adjacencyList[vert]
       
    }
    depthFirstSearch(start){
        let results = []
        let visited = {}
        let stack = []
        //this._dfsRecur(start, visited, results)
        this._dfsIter(start, visited, results)
        console.log(visited)
        console.log(results)
        return results;
    }
    _dfsRecur(start, visited = {}, results = []){
        const values = this.adjacencyList
        if(values[start].length === 0) return 
        results.push(start)
        visited[start]=true;
        values[start].forEach(x=>{
            if(!visited[x]){
            this._dfsRecur(x, visited, results)
            }
        })
        
    }
    _dfsIter(start, visited = {}, results = [], stack = []){
        const values = this.adjacencyList
        stack.push(start)
        
        while(stack.length){
            let current = stack.pop();
            results.push(current)
            visited[current] = true;
          
            values[current].forEach(x =>{
               
                if(!visited[x] && !stack.includes(x)){
                    stack.push(x);
                }
            })
        }
        return
    }
    breadthFirstSearch(start){
        let visited = {};
        let results = [];
        let queue = [];
        this._bfs(start, visited, results, queue)
        return results
    }
    _bfs(start, visited = {}, results = [], queue = []){
        const values = this.adjacencyList
        queue.push(start);
        visited[start] = true;
        results.push(start);
        let current;
        while(queue.length){
            current = queue.shift()
            values[current].forEach(x =>{
                if(!visited[x]){
                    queue.push(x)
                    results.push(x)
                    visited[x]=true;
                }
            })
        }
    }
}

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

