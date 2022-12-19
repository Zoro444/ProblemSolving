/*
 Given a binary tree, determine if it is 
 height-balanced
*/

function isBalanced(root) {
    let rootLeftDepth = 0;
    let rootRightDepth = 0; 
    let balanced = true; 
    
    if (root) {
        if (root.left){ 
          rootLeftDepth = recursion(root.left);// time O(n / 2)
          if (!balanced) return false;
        }
     
        if (root.right) { 
          rootRightDepth = recursion(root.right); // time O(n / 2)
          if (!balanced) return false;
        }
    }

    if (rootLeftDepth - rootRightDepth > 1 || rootRightDepth - rootLeftDepth > 1) {
        balanced = false;
    }
 
  function recursion(node) {
    if (!balanced) return false;

    let nodeLeftDepth = 0;
    let nodeRightDepth = 0;
    
    if (node.left) {
        nodeLeftDepth = recursion(node.left);
        if (!balanced) return false;
    } 

    if (node.right) {
        nodeRightDepth = recursion(node.right);
        if (!balanced) return false;
    }

    if (nodeLeftDepth - nodeRightDepth > 1 || nodeRightDepth - nodeLeftDepth > 1) {
        balanced = false;
    }
    nodeLeftDepth++; nodeRightDepth++;
    return nodeLeftDepth > nodeRightDepth ? nodeLeftDepth : nodeRightDepth;
  };
  return balanced;
}; /* time complexity = O(n / 2 + n / 2) = O(n) space complexity = O(1) */ 
 