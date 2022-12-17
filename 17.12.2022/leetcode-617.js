/*
 You are given two binary trees root1 and root2.
 Return the merged tree.
*/

function mergeTrees(root1, root2) {
    if (root1 && root2) {
        merge(root1, root2);
    }
    
    return root2 && !root1 ? root2 : root1 ;

    function merge (node1, node2) {//time O(n)
       if (node1 && node2) { 
         node1.val += node2.val;
       }

       if (node1.left && node2.left) {
         merge(node1.left, node2.left);  
       }  

       if (node1.right && node2.right) {
         merge(node1.right, node2.right);
       }

       if (!node1.left && node2.left) {
         node1.left = new TreeNode(); //space O(n)
         merge(node1.left, node2.left);
       }

       if (!node1.right && node2.right) {
         node1.right = new TreeNode(); //space O(n)
         merge(node1.right, node2.right)
       }
    }
}; /* time complexity = O(n) space complexity = O(n) */
 
