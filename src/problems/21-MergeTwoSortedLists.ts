/**
 * @desc linked list
 */
// Definition for singly-linked list.
export class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

export default function mergeTwoSortedLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let curr: ListNode | null;
  let head = { val: -1, next: null};

  curr = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      curr.next = list1;
      list1 = list1?.next;
    } else {
      curr.next = list2;
      list2 = list2?.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;

  return head.next;
}