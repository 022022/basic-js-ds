const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
/**
class Node {
*    constructor(data) {
*      this.data = data;
*      this.left = null;
*      this.right = null;
*   }
*  }
*/

class BinarySearchTree {

    constructor(){
        this.tree = null;
    }

  root() {
    return this.tree;
  }

  add(data) {
      if(this.tree === null){
           this.tree = new Node(data);
      }

      else{
      let currentNode;
      let nextNode = this.tree;
      let direction;

      while(nextNode !== null){
        currentNode = nextNode;

        if(currentNode.data !== data){
            // can't have two same nodes
              if(currentNode.data > data){
                //go left = move currentNode to  currentNode.left
                nextNode = currentNode.left;
                direction = 'left';
            }
              else{ //currentNode.data < data //go right
              nextNode = currentNode.right;
              direction = 'right';
            }
        }
      }

      currentNode[direction] = new Node(data);

      }
  }

  has(data) {

    let currentNode = this.tree;

    while(currentNode !== null){
        if (currentNode.data === data){
            return true;
        }

        if(currentNode.data > data){
            currentNode = currentNode.left;
            break;
        }

        if(currentNode.data < data){
            currentNode = currentNode.right;
            break;
        }

     }

     return false;
}



  find(data) {
    let currentNode = this.tree;

    while(currentNode !== null){
        if (currentNode.data === data){
            return currentNode;
        }

        if (currentNode.data > data){
            currentNode = currentNode.left;

        }

        if (currentNode.data < data){
            currentNode = currentNode.right;

        }
    }

    return null;

  }

  remove(data) {


  }



  min() {

      if (this.tree === null){ // no nodes at all
          return null;
      }

        let candidateToMin = this.tree.data;
        let currentNode = this.tree.left; // left is always less

        while(currentNode !== null){
            candidateToMin = currentNode.data;
            currentNode = currentNode.left;
        }

        return candidateToMin;
  }



  max() {
    if (this.tree === null){ // no nodes at all
        return null;
    }

      let candidateToMax = this.tree.data;
      let currentNode = this.tree.right;

      while(currentNode !== null){
          candidateToMax = currentNode.data;
          currentNode = currentNode.right;
      }

      return candidateToMax;
  }
}

module.exports = {
  BinarySearchTree
};