// Import ListNode class if it's defined in another file
// const { ListNode } = require('../extensions/list-node.js');

// Alternatively, define it here if not available externally
class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  // Create a dummy node to handle edge cases such as removing the head
  let dummyNode = new ListNode(0);
  dummyNode.next = l;
  let current = dummyNode;

  // Iterate through the list
  while (current.next !== null) {
    if (current.next.value === k) {
      // Skip the node with value k
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  // Return the modified list, starting from the next of dummy node
  return dummyNode.next;
}

module.exports = {
  removeKFromList
};
