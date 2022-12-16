/*
  You are given the root of a binary search tree (BST) and an integer val.
 */

function searchBST(root, val) {
  while(root) {
    if (val === root.val){
      return root;
    }
    if (val < root.val) {
      root = root.left;
    }
    else {
      root = root.right
    }
  }
  return null;
}; /*time complexity = O(log n) space complexity = O(1) */ 

