function depthFirstSearch(rootNode, vertices, edges) {
    let stack = [rootNode]
    let visitedNodes = [rootNode]
    
    while (stack.length !== 0) {
        let currentNode = stack.pop()  
        if (!currentNode.discovered) {
            currentNode.discovered = true 
            findAdjacentAndAddToStack(currentNode.name, vertices, edges, stack, visitedNodes)
        }
        
    }
    return visitedNodes
}

function findAdjacentAndAddToStack(vertex, vertices, edges, stack, visited) {
    let newAdjacent

    for (const pair of edges) {
        newAdjacent = null 

        if (pair[1] == vertex) {
            newAdjacent = vertices.filter((x) => x.name == pair[0])[0]
        } else if (pair[0] == vertex) {
            newAdjacent = vertices.filter((x) => x.name == pair[1])[0]
        }

        if (!!newAdjacent && newAdjacent.discovered === null) {
            stack.push(newAdjacent)
            visited.push(newAdjacent)
        }
    }        
    return stack 
}


