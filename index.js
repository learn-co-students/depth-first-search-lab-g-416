// let edges = [
//     ['14th&6th', '23rd&6th'],
//     ['23rd&6th', '34th&6th'],
//     ['34th&6th', '28th&Bwy'],
//     ['28th&Bwy', '23rd&Bwy'],
//     ['23rd&Bwy', '14th&Lex'],
//     ['14th&Lex', '23rd&Lex']
// ]
 
// let vertices = [
//   {name: '34th&6th', discovered: null},
//   {name: '23rd&6th', discovered: null},
//   {name: '14th&6th', discovered: null},
//   {name: '28th&Bwy', discovered: null},
//     {name: '23rd&Bwy', discovered: null},
//   {name: '14th&Lex', discovered: null},
//     {name: '23rd&Lex', discovered: null}
// ]

function depthFirstSearch (rootNode, vertices, edges) {
    const arrayExploredVertices = []
    const stack = []
    stack.push(rootNode)
    while (stack.length > 0) {
        let currentVertex = stack.pop()
        if (currentVertex.discovered === null) {
            currentVertex.discovered = true
            findAdjacentVertices(currentVertex, vertices, edges).forEach(vertex => stack.push(vertex))
            arrayExploredVertices.push(currentVertex)
        }
    }
    return arrayExploredVertices
}
function findAdjacentVertices (vertex, vertices, edges) {
    let resultsArray = []
    // edges.forEach(vertexNamePair => {
    //     if (vertexNamePair[0] === vertex.name) {
    //         resultsArray.push(vertexNamePair[1])
    //     }
    //     if (vertexNamePair[1] === vertex.name) {
    //         resultsArray.push(vertexNamePair[0])
    //     }
    // });
    edges.forEach(vertexNamePair => {
        if (vertexNamePair[0] === vertex.name) {
            resultsArray.push(vertexNamePair[1])
        }
    });
    edges.forEach(vertexNamePair => {
        if (vertexNamePair[1] === vertex.name) {
            resultsArray.push(vertexNamePair[0])
        }
    });
    return resultsArray.map(vertexName => {
        return vertices.find(vertex => {
            return vertex.name === vertexName
        })
    })
}