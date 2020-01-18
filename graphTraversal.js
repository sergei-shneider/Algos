class Graph{
  constructor(){
    this.adjacencyList = {}
  }
  addVertex(vert){
    if(this.adjacencyList[vert]) return 0;
    this.adjacencyList[vert] = [];
  }
    addEdge(vertex1, vertex2) {
    if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return 0;
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
    }
    _spliceOut(vertex1, vertex2){
        let ind4spl = this.adjacencyList[vertex1].indexOf(vertex2)
        if(ind4spl!==-1){
             this.adjacencyList[vertex1].splice(ind4spl, 1, '')
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