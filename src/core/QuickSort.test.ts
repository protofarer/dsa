import { main1, main2, main3, main4 } from "./QuickSort";

it("quicksort", () => {
  // // approach 1: use hi as pivot value
  // const a1 = [999, 3, 109, 2314, 12];
  // main1(a1);
  // expect(a1).toStrictEqual([3, 12, 109, 999, 2314]);
  // const a2 = [0, 0, 0, 0, 0, -1];
  // main1(a2);
  // expect(a2).toStrictEqual([-1, 0, 0, 0, 0, 0]);

  // // approach 2: remake approach 1 from memory
  // const b1 = [-5, 5, 12, 777, 0, 6];
  // main2(b1);
  // expect(b1).toStrictEqual([-5, 0, 5, 6, 12, 777]);

  // // approach 3 use lo as pivot value
  // const c1 = [99, 3, 109, 2314, 12];
  // main3(c1);
  // expect(c1).toStrictEqual([3, 12, 99, 109, 2314]);

  // const c2 = [-5, 5, 12, 777, 0, 6];
  // main3(c2);
  // expect(c2).toStrictEqual([-5, 0, 5, 6, 12, 777]);

  // const c3 = [0, 0, 0, 0, 0, -1];
  // main3(c3);
  // expect(c3).toStrictEqual([-1, 0, 0, 0, 0, 0]);

  // const c4 = [5, 3, 8, 1, 4];
  // main3(c4);
  // expect(c4).toStrictEqual([1, 3, 4, 5, 8]);

  // const c5 = [1];
  // main3(c5);
  // expect(c5).toStrictEqual([1]);

  // const c6 = [1, 2];
  // main3(c6);
  // expect(c6).toStrictEqual([1, 2]);

  // const c7 = [2, 1];
  // main3(c7);
  // expect(c7).toStrictEqual([1, 2]);

  // approach 4, pick midpoint as pivot value
  // const d1 = [5, 3, 8, 1, 4];
  // main4(d1);
  // expect(d1).toStrictEqual([1, 3, 4, 5, 8]);

  const d2 = [8,3,9,10,5];
  main4(d2);
  expect(d2).toStrictEqual([3,5,8,9,10]);

  const d3 = [-5, 5, 12, 777, 0, 6];
  main4(d3);
  expect(d3).toStrictEqual([-5, 0, 5, 6, 12, 777]);

  const c3 = [0, 0, 0, 0, 0, -1];
  main4(c3);
  expect(c3).toStrictEqual([-1, 0, 0, 0, 0, 0]);

  const c4 = [5, 3, 8, 1, 4];
  main4(c4);
  expect(c4).toStrictEqual([1, 3, 4, 5, 8]);

  const c5 = [1];
  main3(c5);
  expect(c5).toStrictEqual([1]);

  const c6 = [1, 2];
  main3(c6);
  expect(c6).toStrictEqual([1, 2]);

  const c7 = [2, 1];
  main3(c7);
  expect(c7).toStrictEqual([1, 2]);
});
