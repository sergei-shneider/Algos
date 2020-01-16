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
}

let graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addEdge('A', 'B')
graph.addEdge('A', 'C')
graph.addEdge('D', 'B')
graph.addEdge('C', 'D')

graph.removeVertex('C')