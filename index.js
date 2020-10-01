function depthFirstSearch (rootNode, vertices, edges) {
    let arr = [rootNode]
    let visited = [];
    visited.push(rootNode);
    while (visited.length !== 0) {
        let node = visited.pop();
        if (!node.discovered) {
            node.discovered = true;
            let adj = findAdjacent(node, vertices, edges);
            visited.push(...adj)
            arr.push(...adj)
        }
    }
    return arr;
}
function findAdjacent(node, vertices, edges) {
    let adjNodes = []
    let adj = edges.filter(edge => edge.includes(node.name));
    adj.forEach(edge => {
        edge.forEach(name => {
          if (name !== node.name) {
            let n = findNode(name, vertices);
            adjNodes.push(n)
        }
        })
    })
    return adjNodes.filter(node => !node.discovered);
}

function findNode(name, vertices) {
    return vertices.find(v => v.name === name);
}