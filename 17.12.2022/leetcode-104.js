/*
  A binary tree's maximum depth is the number of nodes 
  along the longest path from the root node down to the
  farthest leaf node.
*/

function maxDepth(root) {
  let currentDepth = 0;
  let depth = 0;
  if (root)recursion(root);

  function recursion (node) {
    currentDepth++;
    if (node.left) {
      recursion(node.left);
    }
    if (node.right) {
      recursion(node.right);
    }
    else {
      if (currentDepth > depth) {
          depth = currentDepth;
      }
    }
    currentDepth--;
  };   
  return depth;
}; /* time complexity = O(n) space complexity = O(1) */
