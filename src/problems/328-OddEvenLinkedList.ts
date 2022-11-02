// https://leetcode.com/problems/odd-even-linked-list/?envType=study-plan&id=level-2
export default function oddEvenLinkedList(head: ListNode | null): ListNode | null {
  let curr = head?.next?.next;
  let lastOdd = head;
  let isOdd = true;
  let prev: ListNode | null = head?.next || null;

  while (curr) {
    const next = curr?.next;
    if (isOdd) {
      prev!.next = curr?.next || null;
      curr.next = lastOdd!.next;
      lastOdd!.next = curr;
      lastOdd = curr;
    } else {
      prev = curr;
    }
    curr = next;
    isOdd = !isOdd;
  }
  return head;
}