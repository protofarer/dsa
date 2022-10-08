  /**
   * @desc dynamic programming
   */
  export default function maximumSubarray(nums: number[]): number {
    let maxSum = nums[0];
    let currSum = -Infinity;
    for (let i = 0; i < nums.length; ++i) {
      currSum = Math.max(nums[i], nums[i] + currSum);
      if (currSum > maxSum) maxSum = currSum;
    }
    return maxSum;
  }
