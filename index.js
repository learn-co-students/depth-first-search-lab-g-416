function depthFirstSearch(rootNode, vertices, edges) {
    let stack = []
    stack.push(rootNode)
    let foundNode = [rootNode]

    while (stack.length != 0) {
        let found = stack.pop()
        if (!found.discovered) {
            found.discovered = true
            findAdjacent(found.name, vertices, edges).forEach(node => {
                foundNode.push(node)
                stack.push(node)
            })
        }
    }
    return foundNode
}

function findAdjacent(nodeName,  vertices, edges){
    return edges.filter(function(edge){
      return edge.includes(nodeName)
    }).map(function(edge){
      return edge.filter(function(node){
        return (node != nodeName)
      })[0]
    }).map(function(name){
      return findNode(name, vertices)
    }).filter(function(node){
          return !node.discovered
      })
  }
  
  function findNode(nodeName, vertices){
    return vertices.find(function(vertex){
      return vertex.name == nodeName
    })
  }