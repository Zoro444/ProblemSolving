/*
    Given the head of a linked list and an integer val, 
    remove all the nodes of the linked list that has Node.val == val, 
    and return the new head.
*/

function removeElements(head, val) {//time O(n) space O(1)
    while (head !== null){
       if (head.val !== val) {
          head.next = removeElements(head.next, val);  
          return head;
       }
    head = head.next;  
    }
    return head;
}
/* time complexity = O(n) space complexity = O(1) */
