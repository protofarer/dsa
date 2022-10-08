/**
 * @desc binary search
 */
export default function mergeSortedArray(nums1: number[], m: number, nums2: number[], n: number): void {
  if (nums2.length === 0) return;
  if (nums1.length === 0) nums1[0] = 0;

  for (let i = 0; i < nums1.length; ++i) {
    if (i < m) {
      if (nums2[0] < nums1[i]) {
        const tmp = nums1[i];
        nums1[i] = nums2.shift() as number;
        orderedInsert(nums2, tmp);
      }
    } else {
      nums1[i] = nums2.shift() as number;
    }
  }
}

function searchInsertPosition(arr: number[], target: number): number {
  let lo = 0;
  let hi = arr.length - 1;

  while (lo < hi) {
    const m = lo + ((hi - lo) >>> 1);
    if (target === arr[m]) {
      return m;
    }
    if (target < arr[m]) {
      hi = m;
    } else {
      lo = m + 1;
    }
  }
  return target <= arr[lo] ? lo: lo + 1;
}

function orderedInsert(arr: number[], val: number) {
  const idx = searchInsertPosition(arr, val);
  arr.splice(idx, 0, val);
}