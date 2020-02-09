const depthFirstSearch = (rootNode, vertices, edges) => {
  let stack = []
  let discovered = []
  stack.push(rootNode)

  while (stack.length !== 0) {
    // if last item in stack has no more discoverable, pop that node
    stack[stack.length - 1].discovered = true

    if (nextUndiscoveredNode(stack[stack.length - 1].name, vertices, edges)) {
      stack.push(nextUndiscoveredNode(stack[stack.length - 1].name, vertices, edges))
    } else {
      discovered.unshift(stack.pop())
    }


  }
  // console.log(nextUndiscoveredNode(stack[stack.length - 1].name, vertices, edges))

  return discovered
}

const nextUndiscoveredNode = (nodeName, vertices, edges) => {

  let foundNodeNames = []
  let nextUndiscoveredNode = null

  let foundEdges = edges.filter(array => array.includes(nodeName))
  foundEdges.forEach(array => {
    foundNodeNames.push(array.find(element => element !== nodeName))
  })

  foundNodeNames.forEach(name => {
    if (!findNode(name, vertices).discovered) {
      nextUndiscoveredNode = findNode(name, vertices)
    }
  })

  return nextUndiscoveredNode
}

const findNode = (nodeName, vertices) => {
  return vertices.find(node => node.name === nodeName)
}

let edges = [
	['14th&6th', '23rd&6th'],
	['23rd&6th', '34th&6th'],
	['34th&6th', '28th&Bwy'],
	['28th&Bwy', '23rd&Bwy'],
	['23rd&Bwy', '14th&Lex'],
	['14th&Lex', '23rd&Lex']
]

let vertices = [
  {name: '34th&6th', discovered: null},
  {name: '23rd&6th', discovered: null},
  {name: '14th&6th', discovered: null},
  {name: '28th&Bwy', discovered: null},
	{name: '23rd&Bwy', discovered: null},
  {name: '14th&Lex', discovered: null},
	{name: '23rd&Lex', discovered: null}
]


nextUndiscoveredNode('34th&6th', edges, vertices)
