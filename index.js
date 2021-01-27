function depthFirstSearch(root, vertices, edges) {
    let stack = []
    stack.push(root)
    let visited = [root]
    while (stack.length !== 0) {
        let current = stack.pop()
        if (!current.discovered) {
            current.discovered = true
            let adjacent = findAdjacentNodes(current.name, vertices, edges)
            adjacent.forEach(node => {
                visited.push(node)
                stack.push(node)
            })
        }
    }
    return visited
}

function findNodeByName(name, vertices) {
    return vertices.find(v => v.name === name)
}

function findAdjacentNodes(name, vertices, edges) {
    let connections = edges.filter(e => e.includes(name))
    let excluded = connections.map(edge => edge.filter(node => name !== node)[0])
    let nodes = excluded.map(node => findNodeByName(node, vertices))
    return nodes.filter(node => !node.discovered)
}