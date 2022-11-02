// https://leetcode.com/problems/sort-list/

export default function sortList(head: ListNode | null): ListNode | null {
  if (head == undefined) return null;

  const list: ListNode[] = [];

  let curr: ListNode | null = head;
  while (curr) {
    list.push(curr);
    curr = curr.next;
  }
  // console.log(`list`, list.map(x => x.val))

  list.sort((a, b) => a.val - b.val);
  // console.log(`sortedList`, list.map(x => x.val))

  for (let i = 0; i < list.length; ++i) {
    list[i].next = list[i + 1] || null;
  }
  
  return list[0];
}
