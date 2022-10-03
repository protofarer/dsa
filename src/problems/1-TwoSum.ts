  export default function twoSum(nums: number[], target: number): number[] {
    const m = new Map();    // [[nums[a], i_a], [nums[b], i_b], ...]

    for (let i = 0; i < nums.length; ++i) {
      const idx = m.get(target - nums[i]);

      if (idx != undefined) {
        return [idx, i];
      }
      
      m.set(nums[i], i);
    }
    return [-Infinity];
  }
