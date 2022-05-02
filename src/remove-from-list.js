const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(list, k) {
  // search in first node
  if (list.value === k) {
    console.log("first value ", list.value);
    list = list.next;
  }

  // call first node previous and search in next ones
  let previousNode = list;
  let currentNode = list.next;

  while (previousNode.next !== null) {
    console.log("currentNode.value ", currentNode.value);
    console.log("previousNode.value ", previousNode.value);

    if (currentNode.value === k) {
      previousNode.next = currentNode.next;
    } else {
      previousNode = previousNode.next;
    }

    currentNode = currentNode.next;
  }

  return list;
}

module.exports = {
  removeKFromList,
};
