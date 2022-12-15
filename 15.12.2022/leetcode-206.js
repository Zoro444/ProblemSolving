/*
 Given the head of a singly linked list,
 reverse the list, and return the reversed list. 
*/

function reverseList(head) {
  let lastNode;
  if (head && head.next) { //
    recursion(head.next, head);
    head.next = null;
  }
  else {
    return head;
  }

  function recursion(head, nextNode) {//time O(n) space O(1)
    if (head && head.next === null) {
      lastNode = head;
    }
    if (head) {
      recursion(head.next, head);
      head.next = nextNode;    
    }
  };
  return lastNode;
}; /* time complexity = O(n) space complexity = O(1) */
  