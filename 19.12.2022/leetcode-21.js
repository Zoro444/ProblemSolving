/*
  You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists in a one sorted list.
  The list should be made by splicing together the nodes of the first two lists.
*/

function mergeTwoLists(list1, list2) {
  if (!list1 || !list2) return list1 ? list1 : list2;

  let ptrList1 = list1;
  let ptrList2 = list2;
  let nextPtrOfList2;
  let boolFirst = true;
  let firstNode = new ListNode(0, list1);
  let previousPtrOfList1 = new ListNode(0, list1);

  while (ptrList2) {
    if (ptrList2 && ptrList2.val < ptrList1.val) {
      nextPtrOfList2 = ptrList2.next;
      ptrList2.next = ptrList1;

      if (previousPtrOfList1.next === list1 && boolFirst) {
          boolFirst = false;
          firstNode.next = ptrList2;
          list1  = ptrList2;
      }

      previousPtrOfList1.next = ptrList2;
      previousPtrOfList1 = new ListNode(0, firstNode.next);
      ptrList1 = list1;
      ptrList2 = nextPtrOfList2;
    }

    else if (ptrList1.next) {
      previousPtrOfList1 = ptrList1;
      ptrList1 = ptrList1.next;
    }

    else {
      ptrList1.next = ptrList2;
      return firstNode.next;
    }
  }
  return firstNode.next;  
};  /* time complexity = O(n * m) space complexity = O(1) */
