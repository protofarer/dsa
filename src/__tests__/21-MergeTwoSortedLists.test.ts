  import f from "../problems/21-MergeTwoSortedLists";
  import { ListNode } from "../problems/21-MergeTwoSortedLists"

  describe("main", () => {
    it("core", () => {
      const A0: ListNode = {
        val: 1,
        next: null
      };

      const A1: ListNode = {
        val: 2,
        next: null
      };

      const A2: ListNode = {
        val: 4,
        next: null
      };


      const B0: ListNode = {
        val: 1,
        next: null
      };

      const B1: ListNode = {
        val: 3,
        next: null
      };

      const B2: ListNode = {
        val: 4,
        next: null
      };

      A0.next = A1;
      A1.next = A2;
      B0.next = B1;
      B1.next = B2;

      const resultHead = f(A0,B0);
      const out0 = [1,1,2,3,4,4]

      let curr = resultHead;
      let i = 0;
      while (curr) {
        expect(curr.val).toBe(out0[i]);
        curr = curr?.next;
        i++;
      }

      expect(f(null, null)).toStrictEqual(null);
      expect(f(null, { val: 0, next: null })?.val).toStrictEqual(0);
    });
  });
