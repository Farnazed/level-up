class Node {
  constructor(value) {
    this.value = value;
    this.left = null; // This is a Node
    this.right = null; // This is a Node
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const insertHelper = (value, currentNode) => {
      if (currentNode === null) {
        currentNode = new Node(value);
      } else if (currentNode.value < value) {
        currentNode.right = insertHelper(value, currentNode.right);
      } else {
        currentNode.left = insertHelper(value, currentNode.left);
      }
      return currentNode;
    };
    this.root = insertHelper(value, this.root);
  }
}

function search(currentNode, value) {
  if (!currentNode) {
    return null;
  }
  if (currentNode.value === value) {
    return currentNode;
  }
  if (value > currentNode.value) {
    return search(currentNode.right, value);
  } else {
    return search(currentNode.left, value);
  }
}

function BFS(root) {
  if (!root) {
    return [];
  }

  let queue = [];
  let traverseArray = [];

  root.level = 0;
  queue.push(root);

  while (queue.length != 0) {
    let currentNode = queue[0];
    traverseArray.push(currentNode.value);
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    queue.shift();
  }
  return traverseArray;
}

function DFS(currentNode, traverseArray) {
  // in order left currentNode right
  if (!currentNode) {
    return traverseArray;
  }

  DFS(currentNode.left, traverseArray);
  traverseArray.push(currentNode.value);
  DFS(currentNode.right, traverseArray);
  return traverseArray;
}

let tree = new BinarySearchTree();

tree.insert(10, tree.root);
tree.insert(5, tree.root);
tree.insert(15, tree.root);
tree.insert(3, tree.root);
tree.insert(9, tree.root);
tree.insert(20, tree.root);

console.log(tree);
// console.log(search(tree.root, 15));
// console.log(BFS(tree.root));
// console.log('DFS traverse', DFS(tree.root, []));
