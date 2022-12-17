/*
 Given head, the head of a linked list,
 determine if the linked list has a cycle in it.
*/

function hasCycle(head) {
  while (head) {
    if (head.val !== undefined) {
      head.val = undefined;
    }
    else {
      return true;
    }
    if (head.next) {
        head = head.next;
      }
    else { 
      return false;
    }
  }
  return false;
};/*time complexity = O(n) space complexity = O(1) */ 