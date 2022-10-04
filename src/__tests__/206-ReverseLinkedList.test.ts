import f from "../problems/206-ReverseLinkedList";

describe("main", () => {
  it("core", () => {
      //test 1
      const A0: ListNode = {
        val: 1,
        next: null
      };

      const A1: ListNode = {
        val: 2,
        next: null
      };

      const A2: ListNode = {
        val: 3,
        next: null
      };


      const A3: ListNode = {
        val: 4,
        next: null
      };

      const A4: ListNode = {
        val: 5,
        next: null
      };

      A0.next = A1;
      A1.next = A2;
      A2.next = A3;
      A3.next = A4;

      const resultHead = f(A0);
      const out0 = [5,4,3,2,1]

      let curr = resultHead;
      let i = 0;
      while (curr) {
        expect(curr.val).toBe(out0[i]);
        curr = curr?.next;
        i++;
      }

      // test 2
      const B0: ListNode = {
        val: 1,
        next: null
      };

      const B1: ListNode = {
        val: 2,
        next: null
      };

      B0.next = B1;

      const resultHead1 = f(B0);
      const out1 = [2,1];

      curr = resultHead1;
      i = 0;
      while (curr) {
        expect(curr.val).toBe(out1[i]);
        curr = curr?.next;
        i++;
      }

      // test 3
      expect(f(null)).toStrictEqual(null);
  });
});
