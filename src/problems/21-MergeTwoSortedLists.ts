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
  let curr1: ListNode | null = list1;   // points to head
  let curr2: ListNode | null = list2;   // points to head
  let curr: ListNode | null;

  // printInputLists();

  // Set head of new merged list
  if (curr1 !== null && curr2 !== null) {
    if (curr1.val <= curr2.val) {
      curr = curr1;
      curr1 = curr1?.next;
    } else {
      curr = curr2;
      curr2 = curr2?.next;
    }
  } else if (curr1 !== null) {
    curr = curr1;
    curr1 = curr1?.next;
  } else if (curr2 !== null) {
    curr = curr2;
    curr2 = curr2?.next;
  } else {
    return null;
  }
  let head = curr;

  while ((curr1 || curr2)) {

    // console.log(`curr:${curr.val}; curr1:${curr1?.val}; curr2:${curr2?.val}`, )
    
    if (curr1 && curr2) {
      if (curr1.val <= curr2.val) {
        curr.next = curr1;
        curr = curr1;
        curr1 = curr1?.next;
      } else {
        curr.next = curr2;
        curr = curr2;
        curr2 = curr2?.next;
      }
    } else if (curr1) {
      curr.next = curr1;
      curr = curr1;
      curr1 = curr1?.next;
    } else if (curr2) {
      curr.next = curr2;
      curr = curr2;
      curr2 = curr2?.next;
    }
  }

  // let mstr = "[";
  // let testm: ListNode | null = head;
  // while(testm) {
  //   mstr += `${testm?.val},`;
  //   testm = testm?.next;
  // }
  // mstr += "]";
  // console.log(`merged: ${mstr}`, )

  // function printInputLists() {
  //   let list1str = "[";
  //   let test1 = curr1;
  //   while(test1) {
  //     list1str += `${test1?.val},`;
  //     test1 = test1?.next;
  //   }
  //   list1str += "]";
  //   console.log(`test1:`, list1str);

  //   let list2str = "[";
  //   let test2 = curr2;
  //   while(test2) {
  //     list2str += `${test2?.val},`;
  //     test2 = test2?.next;
  //   }
  //   list2str += "]";
  //   console.log(`test2:`, list2str);
  // }

  return head;
}

    //   const A0: ListNode = {
    //     val: 1,
    //     next: null
    //   };

    //   const A1: ListNode = {
    //     val: 2,
    //     next: null
    //   };

    //   const A2: ListNode = {
    //     val: 4,
    //     next: null
    //   };


    //   const B0: ListNode = {
    //     val: 3,
    //     next: null
    //   };

    //   const B1: ListNode = {
    //     val: 5,
    //     next: null
    //   };

    //   const B2: ListNode = {
    //     val: 99,
    //     next: null
    //   };

    //   A0.next = A1;
    //   A1.next = A2;
    //   B0.next = B1;
    //   B1.next = B2;

    // //  mergeTwoSortedLists(A0, B0) ;