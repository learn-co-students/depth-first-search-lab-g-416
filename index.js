function depthFirstSearch(rootNode, vertices, edges){
    let stack = [];
    stack.push(rootNode);
    let visted = [rootNode];

    while(stack.length != 0){
        let v = stack.pop()
        if(!v.discovered){
            v.discovered = true

            findAdjacent(v.name, vertices, edges).forEach(function(node){
                visted.push(node)
                stack.push(node)
            })
        }
    }

    return visted

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