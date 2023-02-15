import { mergeSort } from "./MergeSort";

describe("Mergesort", () => {
  it("test", () => {
    expect(mergeSort([])).toBe(null);
    expect(mergeSort([1])).toStrictEqual([1]);
    expect(mergeSort([999, 1])).toStrictEqual([1, 999]);
    expect(mergeSort([7, 3, 12])).toStrictEqual([3, 7, 12]);
    expect(mergeSort([5, 3, 8, 1])).toStrictEqual([1, 3, 5, 8]);
    expect(mergeSort([-5, 3, 8, 1, -999])).toStrictEqual([-999, -5, 1, 3, 8]);
  });
});
