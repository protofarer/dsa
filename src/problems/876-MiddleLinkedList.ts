export default function middleLinkedList(head: ListNode | null): ListNode | null {
  let curr: ListNode | null | undefined = head;
  let m = curr;
  let i = 1;
  while(curr) {
    m = i % 2 === 0 ? m!.next : m;
    i++;
    curr = curr?.next;
  }
  return m;
}
