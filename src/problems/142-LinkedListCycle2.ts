/**
 * @desc linked list
 */
export default function linkedListCycle2(head: ListNode | null): ListNode | null {
  let tortoise = head?.next;
  let hare = head?.next?.next;
  while (hare && hare.next) {  // is tortoise and hare needed?
    if (hare === tortoise) {
      let detector = head;
      while (detector !== tortoise) {
        tortoise = tortoise!.next;
        detector = detector!.next;
      }
      return detector;
    }
    tortoise = tortoise!.next;
    hare = hare.next?.next;
  }

  return null;
}

// from LinkedListCycle 1
// function isCycle(head: ListNode | null) {
//   const visited: number[] = [];
//   let curr = head;

//   while (curr) {
//     if (curr.next && visited.includes(curr.next?.val)) {
//       return true;
//     }
//     visited.push(curr.val);
//     curr = curr.next;
//   }

//   return null;
// }


