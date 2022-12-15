/*
  Given the head of a sorted linked list,
  delete all duplicates such that each element appears only once.
  Return the linked list sorted as well.
*/

 function deleteDuplicates(head) { //time O(n) space O(1)
    while (head !== null){
      if (head.next !== null && head.next.val !== head.val) {
        head.next = deleteDuplicates(head.next);  
        return head;
      }
      if (head.next !== null) {
        head = head.next;  
      }
      else {
        return head;
      }
    }
    return head;
}; /* time complexity = O(n) space complexity = O(1) */
