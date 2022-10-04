export default function squaresSortedArray(nums: number[]): number[] {
  let left = 0;
  let right = nums.length - 1;
  let out: number[] = [];
  let idx = right;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      out[idx--] = nums[left++]**2;
    } else {
      out[idx--] = nums[right--]**2;
    }
  }
  return out;
}
