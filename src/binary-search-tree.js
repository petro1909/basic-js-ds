const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootNode = null;
  root() {
    return this.rootNode;
    
  }

  add(data) {
    if(this.rootNode == null) {
      this.rootNode = new Node(data);
      return;
    }
    let current = this.rootNode;
    while(current) {
      if(data > current.data) {
        if(current.right) current = current.right;
        else {
          current.right = new Node(data);
          break;
        };
      } 
      else if (data < current.data) {
        if(current.left) current = current.left;
        else {
          current.left = new Node(data);
          break;
        };
      }
    }
    console.log(this.rootNode);
  }

  has(data) {
    let current = this.rootNode;
    while(current) {
      if(data > current.data) {
        current = current.right;
      } 
      else if (data < current.data){
        current = current.left;
      }
      else {
        return true;
      }
    }
    return false;
  }

  find(data) {
    let current = this.rootNode;
    while(current) {
      if(data > current.data) {
        current = current.right;
      } 
      else if (data < current.data){
        current = current.left;
      }
      else {
        return current;
      }
    }
    return null;
  }

  remove(data) {

    this.rootNode = recoursiveRemove(this.rootNode, data);

    function recoursiveRemove(current, data) {
      while(current != null) {
        if(data > current.data) {
          current.right = recoursiveRemove(current.right, data);
        } 
        else if (data < current.data){
          current.left = recoursiveRemove(current.left, data);
        }
        else {
          if(!current.left && !current.right) {
            current = null;
          }
          else if(!current.left) {
            current = current.right;
          }
          else if(!current.right) {
            current = current.left;
          }
          else {
            let rightMin = current.right;
            while(rightMin.left) {
              rightMin = rightMin.left;
            }
            current.data = rightMin.data;
            current.right = recoursiveRemove(current.right, current.data);
          }
          return current;
        }
        return current;
      }
    }
  }

  min() {
    if(!this.rootNode) return null;
    let current = this.rootNode;
    while(current.left)  {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if(!this.rootNode) return null;
    let current = this.rootNode;
    while(current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};