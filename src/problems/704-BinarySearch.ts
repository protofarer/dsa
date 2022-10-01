export default function binarySearch(nums: number[], target: number): number {

  let start = 0;
  let end = nums.length - 1;
  let midpoint: number;
  
  while (end - start >= 0) {
    midpoint = start + Math.floor((end - start) / 2);

    // console.log(`m:${midpoint}; nums: [${nums.slice(start,end+1)}]`, )

    if (target === nums[midpoint]) {
      return midpoint;
    }
    
    if (target > nums[midpoint]) {
      start = midpoint + 1;
    } else {
      end = midpoint - 1;
    }
  }

  return -1;
}