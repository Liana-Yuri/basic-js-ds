const { NotImplementedError } = require('../extensions/index.js');

/**
 * Node class for the BinarySearchTree
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Implement simple binary search tree according to task description
 */
class BinarySearchTree {

  constructor() {
    this.rootNode = null;  // Root of the tree
  }

  root() {
    return this.rootNode;  // Return the root of the tree
  }

  add(data) {
    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return;  // Do nothing if the data is already in the tree
      }

      if (data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return true;  // Data found
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;  // Data not found
  }

  find(data) {
    let currentNode = this.rootNode;
    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;  // Return the node containing the data
      }

      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return null;  // Data not found
  }

  remove(data) {
    this.rootNode = this._removeNode(this.rootNode, data);  // Update rootNode after removal
  }

  _removeNode(node, data) {
    if (node === null) return null;  // If node is not found

    if (data === node.data) {
      // Node has no children
      if (node.left === null && node.right === null) {
        return null;
      }

      // Node has only one child (right)
      if (node.left === null) {
        return node.right;
      }

      // Node has only one child (left)
      if (node.right === null) {
        return node.left;
      }

      // Node has two children - Find the smallest node in the right subtree
      let minRight = this._findMinNode(node.right);
      node.data = minRight.data;  // Replace node data with the smallest in right subtree
      node.right = this._removeNode(node.right, minRight.data);  // Remove the smallest node from the right subtree
      return node;
    } 

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);  // Traverse left subtree
      return node;
    } else {
      node.right = this._removeNode(node.right, data);  // Traverse right subtree
      return node;
    }
  }

  _findMinNode(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;  // Return the node with the smallest value
  }

  min() {
    if (this.rootNode === null) {
      return null;  // No tree exists
    }

    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;  // Return the smallest data
  }

  max() {
    if (this.rootNode === null) {
      return null;  // No tree exists
    }

    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;  // Return the largest data
  }
}

module.exports = {
  BinarySearchTree
};
