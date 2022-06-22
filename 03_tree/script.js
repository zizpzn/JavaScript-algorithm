// const tree = {
//   root: {
//     value: 1,
//     left: {
//       value: 2,
//       left: {
//         value: 3,
//         left: null,
//         right: null,
//       },
//       right: {
//         value: 4,
//         left: null,
//         right: null,
//       },
//     },
//     right: {
//       value: 5,
//       left: {
//         value: 6,
//         left: null,
//         right: null,
//       },
//       right: {
//         value: 7,
//         left: null,
//         right: null,
//       },
//     },
//   },
// };

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(data) {
    let init = new Node(data);
    this.root = init;
    this.dataNumber = 0;
  }

  length() {
    return this.dataNumber;
  }

  insert(data) {
    let newNode = new Node(data);
    let circularNode = this.root;

    while (circularNode) {
      if (data === circularNode.data) {
        return;
      }
      if (data < circularNode.data) {
        if (!circularNode.left) {
          circularNode.left = newNode;
          this.dataNumber += 1;
          return;
        }
        circularNode = circularNode.left;
      }
      if (data > circularNode.data) {
        if (!circularNode.right) {
          circularNode.right = newNode;
          this.dataNumber += 1;
          return;
        }
        circularNode = circularNode.right;
      }
    }
  }

  DFS() {
    let result = [];
    let stack = [this.root];

    while (stack.length !== 0) {
      let current = stack.pop();
      if (current.right) {
        stack.push(current.right);
      }
      if (current.left) {
        stack.push(current.left);
      }
      result.push(current.data);
    }

    return result;
  }

  BFS() {
    let result = [];
    let queue = [this.root];

    while (queue.length !== 0) {
      let current = queue.shift();
      if (current.right) {
        queue.push(current.right);
      }
      if (current.left) {
        queue.push(current.left);
      }
      result.push(current.data);
    }

    return result;
  }
}

let tree = new Tree(5);
tree.insert(3);
tree.insert(8);
tree.insert(1);
tree.insert(4);
tree.insert(6);
tree.insert(9);

console.log(tree.root.data);
console.log(tree.root.left.data);
console.log(tree.root.right.data);
console.log(tree.root.right.left.data);
console.log(tree.root.right.right.data);

console.log(tree.DFS());
console.log(tree.BFS());
