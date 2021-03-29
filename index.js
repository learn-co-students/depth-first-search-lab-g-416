let findAdjacent = (nodeName, vertices, edges) => {
    const adjacentNodes = []
    let selectEdges = edges.filter( e => e[0] === nodeName || e[1] === nodeName );
    for (let idx in selectEdges) {
        let adjacentNodeName
        let adjacentVertex
        nodeName === selectEdges[idx][0] ? adjacentNodeName = selectEdges[idx][1] : adjacentNodeName = selectEdges[idx][0]
        adjacentVertex = vertices.find( v => v.name === adjacentNodeName )
        if (adjacentVertex.discovered === null) adjacentNodes.push(adjacentVertex)
    }
    return adjacentNodes
}

function depthFirstSearch(startingNode, vertices, edges) {
    let visited = [startingNode]
    let visitedOrder = [startingNode]
    startingNode.discovered = true;

    while (visited.length !== 0){
        let currentNode = visited.pop()
        let adjacentNodes = findAdjacent(currentNode.name, vertices, edges)
        adjacentNodes.map((n) => n.discovered = true)
        visited = visited.concat(adjacentNodes)
        visitedOrder = visitedOrder.concat(adjacentNodes)
    }
    return visitedOrder
}