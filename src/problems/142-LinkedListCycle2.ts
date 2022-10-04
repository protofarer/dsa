export default function linkedListCycle2(head: ListNode | null): ListNode | null {
}

function isCycle(head: ListNode | null) {
  const visited: number[] = [];
  let curr = head;

  while (curr) {
    if (curr.next && visited.includes(curr.next?.val)) {
      return true;
    }
    visited.push(curr.val);
    curr = curr.next;
  }

  return null;
}


