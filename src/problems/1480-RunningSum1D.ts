export default function runningSum(nums: number[]): number[] {
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; ++i) {
    arr.push(arr[i - 1] + nums[i]);
  }
  return arr;
}