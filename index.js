/*
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
] */

function depthFirstSearch(rootNode, vertices, edges) {
    //stack holds places to visit next (last in first out order)
    let stack = [];
    stack.push(rootNode);
    let visited = [rootNode];

    //while there are vertices in our stack..
    while (stack.length != 0) {
        //take the last vertex in our stack
        let vertex = stack.pop();
        //if that vertex hasn't been discovered
        if (!vertex.discovered) {
            //change discovered to 'true'
            vertex.discovered = true;
 
            //then find all adjacent vertices to this one
              //iterate over them and push them to our visited array AND the stack
                //so they are added to our queue to explore
            findAdjacent(vertex.name, vertices, edges).forEach(function(node){
                visited.push(node)
                stack.push(node)
            })
        }
    }
    return visited;
}

function findAdjacent(nodeName, vertices, edges) {
    let adjacent = [];
    let filteredEdges = edges.filter(edge => {
        return edge.includes(nodeName);
    })
    filteredEdges.forEach(element => {
        element.forEach(name => {
            if (name != nodeName) {
              let node = vertices.find(n => n.name === name)
              if (node.discovered == null){
                  adjacent.push(node);
              }
            }
        })
    });
    return adjacent;
  }
