function depthFirstSearch(rootNode, vertices, edges) {
	let stack = [rootNode]
	let visited = [rootNode]
	rootNode.discovered = true
  
	while (stack.length !== 0) {
		let lastNode = stack.pop()
		let adjacentNodes = findAdjacent(lastNode.name, vertices, edges)
		lastNode.discovered = true
		stack = stack.concat(adjacentNodes)
		visited = visited.concat(adjacentNodes)
	}

	return visited
}

function findAdjacent(rootNode, vertices, edges) {
	let adjacent = []
	edges.forEach(edge => {
		if (edge.includes(rootNode)) {
			adjacent.push(rootNode === edge[0] ? edge[1] : edge[0])
		}
	})
	return adjacent.map(node => {
		return vertices.find(vertex => (vertex.name === node && vertex.discovered === null))
	}).filter(el => el!= null)
}
