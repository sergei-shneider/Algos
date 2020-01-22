class WeightedGraph{
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
    Dijkstra(vertA, vertB){
        const valueList =  this.adjacencyList 
        let vertDist = {}
        let shortestDist = {}
        const pq = new PriorityQueue
        let visited = [];
        let output = [];
        Object.keys(this.adjacencyList).forEach((x) =>{
            if(x===vertA) vertDist[x]=0;
            else vertDist[x]=Infinity
            shortestDist[x] = null;
        })
        
        Object.entries(vertDist).forEach((x)=>{
          pq.enqueue(x[0], x[1])
        })
      
        while(pq.values.length){
          let toCheck = pq.dequeue()

          if(toCheck.val === vertB){
            let last = vertB;
            output.unshift(vertB)
            while(true){
              output.unshift(shortestDist[last].val)
              last = shortestDist[last].val
              if(shortestDist[last].val===vertA){
                output.unshift(vertA)
                return output;
              }
            }
          }
          else{
            visited.push(toCheck.val)
            valueList[toCheck.val].forEach(x => updObj(Object.keys(x)[0], Object.values(x)[0], toCheck))
          }
        }
        function updObj(vert, val, prev){
          let maxvax = vertDist[prev.val] || 0
          if(val+maxvax<vertDist[vert]){
            shortestDist[vert] = prev;
            vertDist[vert] = val+vertDist[prev.val];
            if(visited.indexOf(vert)===-1){
              pq.enqueue(vert, val);
              pq.sort();
            }
          }
        }
    }
}

class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

let g = new WeightedGraph
g.addVertex('A')
g.addVertex('Z')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('H')
g.addVertex('Q')
g.addVertex('G')
g.addEdge('A', 'Z', 7)
g.addEdge('A', 'C', 8)
g.addEdge('Z', 'Q', 2)
g.addEdge('C', 'G', 4)
g.addEdge('H', 'Q', 3)
g.addEdge('Q', 'C', 6)
g.addEdge('D', 'Q', 8)
g.addEdge('G', 'Q', 9)
g.addEdge('E', 'H', 9)
g.Dijkstra('A', 'D')

