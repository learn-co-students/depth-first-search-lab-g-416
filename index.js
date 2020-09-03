function depthFirstSearch(rootNode, vertices, edges){

  let stack = [rootNode];
  let visited = [rootNode];

  while (stack.length != 0){
    let currNode = stack.pop();
    // console.log(currNode)
    currNode.discovered = 1;

    let adjacent = findAdjacent(currNode.name, vertices, edges)
    console.log(adjacent)
    stack = stack.concat(adjacent)
    visited = visited.concat(adjacent)
  }

  return visited
}


function findAdjacent(edgeName, vertices, edges) {
  let relevantEdges = edges.filter(arr => arr.includes(edgeName))
  let adjacentNodeNames = relevantEdges.map(arr => arr.filter(x => x != edgeName)[0])

  let adjacentVertices = [];

  for (let i=0; i < vertices.length; i++) {
    if (adjacentNodeNames.includes(vertices[i].name)){
      adjacentVertices.push(vertices[i]);
    }
  }

  return adjacentVertices.filter(v => v.discovered == null);
}
