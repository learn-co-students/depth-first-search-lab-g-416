function depthFirstSearch(rootNode, verts, edgs){
    let s = []
    s.push(rootNode)
    let discovered = [rootNode]
    let node
    while(s.length !== 0){
        node = s.pop()
        if(!node.discovered){
            node.discovered = true
        }

        let adjNodes = findAdjacent(node.name, verts, edgs)
        adjNodes.map(n => {
            discovered.push(n)
            s.push(n)
            return
        })
    }
    return discovered
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