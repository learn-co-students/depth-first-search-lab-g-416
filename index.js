// return first node that matches the name of the vertex
const findNode = (nodeName, vertices) => {
  return vertices.find((vertice) => nodeName === vertice.name);
};

// return array of adjacent nodes
const findAdjacent = (nodeName, vertices, edges) => {
  return (
    edges
      // 1. create an array of edges that includes node name
      .filter((edge) => edge.includes(nodeName))
      // 2. create an array of edges that does not include node name
      .map((edge) => edge.filter((node) => nodeName !== node)[0])
      // 3. create array of nodes that matches the name of each vertex
      .map((node) => findNode(node, vertices))
      // 4. return new array of nodes that excludes discovered nodes
      .filter((node) => !node.discovered)
  );
};

const depthFirstSearch = (rootNode, vertices, edges) => {
  let stack = [];
  stack.push(rootNode);
  let visited = [rootNode];
  while (stack.length !== 0) {
    let vertex = stack.pop();
    if (!vertex.discovered) {
      vertex.discovered = true;
      findAdjacent(vertex.name, vertices, edges).forEach((node) => {
        visited.push(node);
        stack.push(node);
      });
    }
  }
  return visited;
};
