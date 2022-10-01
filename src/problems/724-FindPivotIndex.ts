export default function pivotIndex(nums: number[]): number {

  /* 
    can either:
    A) hold left and right accumulation deltas in memory
    B) calc on each iteration (less memory)
    ... chose B
  */

  let leftSum: number = 0;
  let rightSum: number = nums.length === 1 
  ? 0
  : nums.slice(1).reduce((prev, curr) => prev + curr);
  
  for (let i = 0; i < nums.length; ++i) {

    if (i !== 0) {
      leftSum += nums[i - 1];
      rightSum -= nums[i];
    }

    if (leftSum === rightSum) return i;
  }

  return -1;
}