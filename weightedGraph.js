class Graph{
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


let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B", 1)
g.addEdge("A", "C", 1)
g.addEdge("B","D", 1)
g.addEdge("C","E", 1)
g.addEdge("D","E", 1)
g.addEdge("D","F", 1)
g.addEdge("E","F", 1)
g.removeEdge("E", "F")
console.log(g.adjacencyList)