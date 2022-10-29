/**
 * @desc linked list
 */
// https://leetcode.com/problems/linked-list-cycle/

export default function linkedListCycle(head: ListNode | null): boolean {
  const visited = new Map();
  let curr = head;
  let i = 0;
  while (curr) {
    if (visited.has(curr.next)) {
      return true;
    }
    visited.set(curr, i);
    i++;
    curr = curr.next;
  }
  return false;
}
