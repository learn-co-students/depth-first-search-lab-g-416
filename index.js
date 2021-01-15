function depthFirstSearch(rootNode, vertices, edges){
    let stack = [rootNode] //LIFO
    let discovered = []
  
    while(stack.length !=0){
      let current = stack.pop() //extracts node from end
      console.log(current, "current")
      if (current.discovered == null){
        current.discovered = true
        discovered.push(current)
        findAdjacent(current, edges, vertices).forEach(node => {
          stack.push(node)
        })
      }
    }
    return discovered
  }
//returns the next node
function findAdjacent(rootNode, edges, vertices){
    const found = edges.filter(edgeSet => edgeSet.includes(rootNode.name))
    .map(edge => edge.filter(node => node != rootNode.name)[0])
    
    const adjacent = []
    found.forEach(item => {
        adjacent.push(vertices.find(vertice => vertice.name == item))
    })

    return adjacent
}