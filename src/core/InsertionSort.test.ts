import { insertionSort, insertionSort2, insertionSort3 } from "./InsertionSort";

it("InsertionSort", () => {
  expect(insertionSort([3, 2, 1])).toStrictEqual([1, 2, 3]);
  expect(insertionSort([1, 2, 3])).toStrictEqual([1, 2, 3]);
  expect(insertionSort([1, 2, -3])).toStrictEqual([-3, 1, 2]);
  expect(insertionSort([1, 1, 1])).toStrictEqual([1, 1, 1]);
  expect(insertionSort([12])).toStrictEqual([12]);

  // expect(insertionSort2([3, 2, 1])).toStrictEqual([1, 2, 3]);
  // expect(insertionSort2([1, 2, 3])).toStrictEqual([1, 2, 3]);
  // expect(insertionSort2([1, 2, -3])).toStrictEqual([-3, 1, 2]);
  // expect(insertionSort2([1, 1, 1])).toStrictEqual([1, 1, 1]);
  // expect(insertionSort2([12])).toStrictEqual([12]);

  // expect(insertionSort3([3, 2, 1])).toStrictEqual([1, 2, 3]);
  // expect(insertionSort3([1, 2, 3])).toStrictEqual([1, 2, 3]);
  // expect(insertionSort3([1, 2, -3])).toStrictEqual([-3, 1, 2]);
  // expect(insertionSort3([1, 1, 1])).toStrictEqual([1, 1, 1]);
  // expect(insertionSort3([12])).toStrictEqual([12]);
});
