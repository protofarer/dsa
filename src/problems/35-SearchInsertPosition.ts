  export default function searchInsertPosition(nums: number[], target: number): number {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
      const m = lo + ((hi - lo) >>> 1);
      if (target === nums[m]) {
        return m;
      }
      if (target < nums[m]) {
        hi = m;
      } else {
        lo = m + 1;
      }
    }
    return target <= nums[lo] ? lo : lo + 1;
  }
