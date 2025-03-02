const { NotImplementedError } = require('../extensions/index.js');
// Importing ListNode class (uncomment this line if ListNode is in the correct path)
// const { ListNode } = require('../extensions/list-node.js'); 

// In case ListNode is not provided, here's the implementation:
class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.head = null;  // Points to the first node in the queue
    this.tail = null;  // Points to the last node in the queue
  }

  // Get the underlying list (the entire linked list)
  getUnderlyingList() {
    return this.head;
  }

  // Add a new element to the queue
  enqueue(value) {
    const newNode = new ListNode(value);
    
    if (!this.tail) {
      // If the queue is empty, the new node will be both head and tail
      this.head = this.tail = newNode;
    } else {
      // Otherwise, add the new node at the end of the queue and update the tail
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // Remove and return the element from the front of the queue
  dequeue() {
    if (!this.head) {
      // If the queue is empty, return null (or throw error depending on requirement)
      return null;
    }
    
    const dequeuedValue = this.head.value;
    this.head = this.head.next;  // Move the head pointer to the next node
    
    if (!this.head) {
      // If the queue is now empty, set tail to null
      this.tail = null;
    }
    
    return dequeuedValue;
  }
}

module.exports = {
  Queue
};
