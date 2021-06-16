// PSUEDOCODE Wiki:
  // procedure DFS_iterative(G, v) is
  //   let S be a stack
  //   S.push(v)
  //   while S is not empty do
  //       v = S.pop()
  //       if v is not labeled as discovered then
  //           label v as discovered
  //           for all edges from v to w in G.adjacentEdges(v) do 
  //               S.push(w)

// DFS Steps:
  // set an empty stack to store visited vertices
  // first push the root vertex onto the stack
  // then while stack is not empty
  // pop vertex from stack, store it as current vertex
  // if current vertex is not marked explored
    // label current vertex as explored
    // for all vertices from vertex to adjacent vertex in adjacentEdges(vertex)
      // stack.push(adjacentVertex)
      
      
function depthFirstSearch(rootNode, vertices, edges) {
  const stack = [];
  stack.push(rootNode);
  const explored = [rootNode];
  
  while (stack.length !== 0) {
    let currentVertex = stack.pop(); 
    
    if (currentVertex.discovered === null) {
      currentVertex.discovered = true; // label as explored
      
      for (const vertex of findAdjacent(currentVertex.name, vertices, edges)) { // ['23rd&6th', '28th&Bwy']
        explored.push(vertex);
        stack.push(vertex); 
      }
    }
  }
  return explored;
}

function findAdjacent(nodeName,  vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(function(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
		return !node.discovered
	})
}

function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}

      
      
      
      
      
      
      
      
      
      
      