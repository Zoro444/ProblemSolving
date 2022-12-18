 /*
    Given the heads of two singly linked-lists headA and headB,
    return the node at which the two lists intersect. 
    If the two linked lists have no intersection at all, return null.
 */

function getIntersectionNode(headA, headB) {
    let lengthA = 0;
    let lengthB = 0;
    let ptrA = headA;
    let ptrB = headB;

    while (ptrA) {
        lengthA++;
        ptrA = ptrA.next;
    }
   
    while (ptrB) {
        lengthB++;
        ptrB = ptrB.next;
    }

    while (lengthA > lengthB) {
       headA = headA.next;
       lengthB++;
    }
    
    while (lengthA < lengthB) {
        headB = headB.next;
        lengthA++;
    }

    while (headA) {
        if (headA === headB) {
             return headA;
        }
        headA = headA.next;
        headB = headB.next;
    }
}; /* time complexity = O(n) space complexity = O(1) */
