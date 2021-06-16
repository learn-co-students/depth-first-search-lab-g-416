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
  stack.push(rootNode);
  let explored = [rootNode];

  while (stack.length > 0) {
    let vertex = stack.pop();
    if (!vertex.discovered) {
      vertex.discovered = true;
      for (const edge of findAdjacent(vertex.name, vertices, edges)) {
        stack.push(edge);
        explored.push(edge);
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
  
function adjacentEdges(vertex, edges) {
  console.log('vertex ', vertex);
  const firstAdjacentIdx = edges.indexOf(edges[vertex.name]) - 1;
  const nextAdjacentIdx = edges.indexOf(edges[vertex.name]) + 2;
  
  return [edges[firstAdjacentIdx], edges[nextAdjacentIdx]];
}      
      

      
      
      
      
      
      
      
      
      
      