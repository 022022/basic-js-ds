const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */



class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    if (this.tree === null) {
      this.tree = new Node(data);
    } else {
      let currentNode;
      let nextNode = this.tree;
      let direction;

      while (nextNode !== null) {
        currentNode = nextNode;

        if (currentNode.data !== data) {

          if (currentNode.data > data) {

            nextNode = currentNode.left;
            direction = "left";
          } else {

            nextNode = currentNode.right;
            direction = "right";
          }
        }
      }

      currentNode[direction] = new Node(data);
    }
  }

  has(data) {
    let currentNode = this.tree;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return true;
      }

      if (currentNode.data > data) {
        currentNode = currentNode.left;
        continue;
      }

      if (currentNode.data < data) {
        currentNode = currentNode.right;
        continue;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.tree;

    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }

      if (currentNode.data > data) {
        currentNode = currentNode.left;
      }

      if (currentNode.data < data) {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  remove(data) {
    if (this.tree === null) {
      return null;
    }

    let direction;
    let previousNode;
    let currentNode = this.tree;


    while (currentNode !== null) {
      if (currentNode.data === data) {

        if (currentNode.left === null && currentNode.right === null) {
          previousNode[direction] = null;
          return;
        }


        if (currentNode.left !== null && currentNode.right === null) {
          previousNode[direction] = currentNode.left;
          return;
        }

        if (currentNode.left === null && currentNode.right !== null) {
          previousNode[direction] = currentNode.right;
          return;
        }

        let candidateToMin = currentNode.right;
        let previousToCandidateToMin = currentNode;
        let directionToMin = "right";

        while (candidateToMin.left !== null) {
          previousToCandidateToMin = candidateToMin;
          candidateToMin = candidateToMin.left;
          directionToMin = "left";
        }


        currentNode.data = candidateToMin.data;

        if (candidateToMin.right === null) {
          previousToCandidateToMin[directionToMin] = null;
          return;
        }


        if (candidateToMin.right !== null) {
          previousToCandidateToMin[directionToMin] = candidateToMin.right;
          return;
        }


        return;
      }

      if (currentNode.data > data) {
        previousNode = currentNode;
        currentNode = currentNode.left;
        direction = "left";

        continue;
      }

      if (currentNode.data < data) {
        previousNode = currentNode;
        currentNode = currentNode.right;
        direction = "right";

        continue;
      }
    }

    return;
  }

  min() {
    if (this.tree === null) {
      return null;
    }

    let candidateToMin = this.tree.data;
    let currentNode = this.tree.left;

    while (currentNode !== null) {
      candidateToMin = currentNode.data;
      currentNode = currentNode.left;
    }

    return candidateToMin;
  }

  max() {
    if (this.tree === null) {
      return null;
    }

    let candidateToMax = this.tree.data;
    let currentNode = this.tree.right;

    while (currentNode !== null) {
      candidateToMax = currentNode.data;
      currentNode = currentNode.right;
    }

    return candidateToMax;
  }
}

module.exports = {
  BinarySearchTree,
};
