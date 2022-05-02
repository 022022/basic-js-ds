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
            continue;
        }

        if(currentNode.data < data){
            currentNode = currentNode.right;
            continue;
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

    if (this.tree === null){
        return null;
    }

    let direction; //last direction used
    let previousNode;
    let currentNode = this.tree;

    console.log(currentNode.data, currentNode !== null, currentNode.data === data);

    while(currentNode !== null){

        if(currentNode.data === data){

            //leaf
            if(currentNode.left === null && currentNode.right === null){
                previousNode[direction] = null;
                return;
            }

            //one direction
            if(currentNode.left !== null && currentNode.right === null){
                previousNode[direction] = currentNode.left;
                return;
            }

            if(currentNode.left === null && currentNode.right !== null){
                previousNode[direction] = currentNode.right;
                return;
            }

            //two directions

            console.log('two directions')

            //1. search for min in right branch -> go right, to the min (=last left)

            let candidateToMin = currentNode.right;
            let previousToCandidateToMin = currentNode;
            let directionToMin = 'right';

            console.log('previousToCandidateToMin, CandidateToMin  ' + previousToCandidateToMin, candidateToMin);

            while(candidateToMin.left !== null){
                previousToCandidateToMin = candidateToMin;
                candidateToMin = candidateToMin.left;
                directionToMin = 'left';

            }

            // 2. change data in node that is being removed
            currentNode.data = candidateToMin.data;
            //
            // 3. delete min node

                //min is leaf
                if(candidateToMin.right === null){
                    previousToCandidateToMin[directionToMin] = null;
                    return;
                }

                //min - if one direction - always right (if we search for min in right branch)
                if(candidateToMin.right !== null){
                    previousToCandidateToMin[directionToMin] = candidateToMin.right;
                    return;
                }


            //
            return;
        }

        if(currentNode.data > data){
            previousNode = currentNode;
            currentNode = currentNode.left;
            direction = 'left';

            console.log(' currentNode.data > data -- currentNode  ' + currentNode + 'previous - '+ previousNode);

            continue;
        }

        if(currentNode.data < data){
            previousNode = currentNode;
            currentNode = currentNode.right;
            direction = 'right';

            console.log(' currentNode.data < data -- currentNode  ' + currentNode.data + 'previous - '+ previousNode.data);

            continue;
        }
    }

    return; // if there's no such node does nothing

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