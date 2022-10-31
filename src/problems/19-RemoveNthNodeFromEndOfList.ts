// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
export default function removeNthNodeFromEndOfList(
  head: ListNode | null, n: number
): ListNode | null {
  let list: ListNode[] = [];
  let curr: ListNode | null = head;
  let newHead = head;
  while (curr) {
    list.push(curr);
    curr = curr.next;
  }
  const node = list[list.length - n];
  const prev = list[list.length - n - 1];
  const next = list[list.length - n + 1];
  // list.splice(list.length - n, 1);

  if (prev) {
    prev.next = next ?? null;
  } else {
    newHead = node.next;
  }
  node.next = null;

  // return list[0] ?? null;
  return newHead;
}
