const depthFirstPrint = (graph, source) => {
  let stack = [source]

  while (stack.length) {
    const current = stack.pop()
    console.log(current)
    for (let neighbor of graph[current]) {
      stack.push(neighbor)
    }
  }
}

const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
}

depthFirstPrint(graph, "a")
