// function depthFirstSearch(rootNode, vertices, edges){
//   let exploredVertices = [];
//   let currentVertices = [rootNode];
//   let edgesWithAdjacents = edges.filter( (edge) => {
//     return edge[0] === rootNode.name || edge[1] === rootNode.name
//   })
//   let v = currentVertices.shift();
//   v.discovered = true
//   exploredVertices.push(v)
//   let edgeNames = edgesWithAdjacents.map(function(edge))
//   let adjacentVertices = vertices.filter( (vertix) => {
//     edgesWithAdjacents.map( (edge) => {
//       return vertix.name === edge[0] || vertix.name === edge[1]
//     })
//   })
  
//   let filteredAdjacentVertices = adjacentVertices.filter( (vertix) => {
//     return vertix.discovered === 'null'
//   })
  
//   return filteredAdjacentVertices
// }

function depthFirstSearch(rootNode, vertices, edges){
  let explored = [];
  explored.push(rootNode)
  let visited = [rootNode];
  while(explored.length !== 0){
    //console.log('explored[0]', explored[0])
    let v = explored.pop();
    if(!v.discovered){
      v.discovered = true;
      console.log('v', v)
      let adjacents = findAdjacentNodes(v, vertices, edges);
      adjacents.forEach( (node) => {
        //console.log('node', node)
        visited.push(node);
        explored.push(node);
      })
    }
  }
  return visited
}

function findAdjacentNodes(rootNode, vertices, edges){
  let edgies = edges.filter( (edge) => {
    return edge.includes(rootNode.name);
  })
  console.log('edgies', edgies)
  let edgeNames = edgies.map( (edge) => {
    return edge.find( (e) => e !== rootNode.name)
  })
  console.log('edgeNames', edgeNames)
  let adjacentNodes = edgeNames.map( (name) => {
    return findNode(name, vertices)
  })
  return adjacentNodes.filter( (node) => {
    return !node.discovered
  });
}

function findNode(name, vertices){
  return vertices.find( (vertix) => {
    return vertix.name === name
  })
}