/*
 Given the root of a binary tree,
 return the inorder traversal of its nodes' values.
*/

function inorderTraversal(root) {
  let nodeArr = [];
  if (root) {
    recursionRoot(root);
  } 

  function recursionRoot (root) {
    if (root.left) {
      recursionRoot(root.left);//time = O(n)
    }
    nodeArr.push(root.val);//space = O(n)
    
    if (root.right) {
      recursionRoot(root.right);
    }
    return 1;
  }

  return nodeArr;
};/*time complexity = O(n) space complexity = O(n) */ 
