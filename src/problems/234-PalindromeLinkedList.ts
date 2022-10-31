export default function palindromeLinkedList(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let curr: ListNode | null = head;
  let m: ListNode = head;   // pointer to mid or left-of-mid node
  let leftHalf: number[] = [];
  let shouldMoveMid = true;      // track even or odd

  while (curr) {
    shouldMoveMid = !shouldMoveMid;
    if (shouldMoveMid) {
      m = m.next as ListNode; // while condition maintains m.next as truthy
    } else {
      curr && leftHalf.push(m.val);
    }
    curr = curr.next;
  }

  for (let i = leftHalf.length - 1; i >= 0; --i) {
    if (leftHalf[i] !== m!.val) {
      return false;
    }
    m = m.next as ListNode;
  }

  return true;
}
