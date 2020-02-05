function depthFirstSearch(rootNode, vertices, edges) {
  let visitedVertices = []
  let stack = []
  stack.push(rootNode)
  visitedVertices.push(rootNode)
  while (stack.length > 0) {
    let currentVertex = stack.pop()

    if (currentVertex.discovered == null) {
      currentVertex.discovered = true
    }

    let adjacentVertices = findAdjacent(currentVertex, vertices, edges).filter(vertex => vertex.discovered != true)
    let undiscoveredAdjacentVertices = adjacentVertices.filter(vertex => {
      return vertex.discovered == null
    })

    for (let vertex of undiscoveredAdjacentVertices) {
      stack.push(vertex)
      visitedVertices.push(vertex)
    }
  }
  return visitedVertices
}

function findAdjacent(currentVertex, vertices, edges) {
  //1. filter for vertices including currentVertex's name
  //2. flatten array into one level
  //3. filter for vertexNames not including the currentVertex's name
  let adjacentVertices = []
  let adjacentVertexNames = edges.filter(edge => edge.includes(currentVertex.name)).flat().filter(vertexName => vertexName != currentVertex.name)
  for (let vertexName of adjacentVertexNames) {
    adjacentVertices.push(vertices.find(vertex => vertex.name == vertexName))
  }
  return adjacentVertices
}

let edges = [
    ['14th&6th', '23rd&6th'],
    ['23rd&6th', '34th&6th'],
    ['34th&6th', '28th&Bwy'],
    ['28th&Bwy', '23rd&Bwy'],
    ['23rd&Bwy', '14th&Lex'],
    ['14th&Lex', '23rd&Lex']
]

let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
    {name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
    {name: '23rd&Lex', discovered: null}
]
