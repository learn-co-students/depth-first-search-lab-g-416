function depthFirstSearch(rootNode, vertices, edges){
    let stack = [rootNode]
    let dfsOrder = []
    while (stack.length !== 0) {
        let currentNode = stack.pop();
        if (!dfsOrder.includes(currentNode)) {
            let adjacentNodes = findAdjacentNodes(currentNode, vertices, edges);
            stack.concat(adjacentNodes);
            dfsOrder.push(currentNode);
        }
    }
    return dfsOrder;
}

function findAdjacentNodes(node, vertices, edges) {
    let 
}