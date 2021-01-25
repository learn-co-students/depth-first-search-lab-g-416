function depthFirstSearch(rootNode, vertices, edges){
    let stack = []
    stack.push(rootNode)
    let dfsOrder = [rootNode]
    while (stack.length !== 0) {
        let currentNode = stack.pop();
        // console.log(currentNode.name)
        if (currentNode.discovered !== true) {
            currentNode.discovered = true;
            // console.log('not in dfsOrder yet')
            let adjacentNodes = findAdjacentNodes(currentNode, vertices, edges);
            // console.log(adjacentNodes)
            adjacentNodes.forEach(node => {
                // node.discovered = true;
                dfsOrder.push(node)
                stack.push(node)
            })
        }
    }
    return dfsOrder;
}

function findAdjacentNodes(node, vertices, edges) {
    let nodeName = node.name;
    let nodeEdges = edges.filter(edge => edge.includes(nodeName));
    let adjacentNodeNames = nodeEdges.map(edge => edge.filter(el => el !== nodeName)[0]);
    let adjacentNodes = adjacentNodeNames.map(name => vertices.filter(vertex => vertex.name === name)[0])
    let nonVisited = adjacentNodes.filter(node => node.discovered !== true)
    return nonVisited;
}
