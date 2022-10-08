/** 
 * @desc reverse linked list
 */
export default function reverseLinkedList(head: ListNode | null): ListNode | null {
  let curr: ListNode | null = head;
  let prev: ListNode | null = null;

  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}

// h4x https://leetcode.com/problems/reverse-linked-list/discuss/313728/Javascript-ES6-less-code-solution
// var reverseList = function(head) {
//     let [prev, current] = [null, head]
//     while(current) {
//         [current.next, prev, current] = [prev, current, current.next]
//     }
//     return prev
// }