export default function largestPerimeterTriangle(nums: number[]): number {
  // sort desc
  nums.sort((a,b) => b - a);

  // Case 0: if only 3, shortcircuit rest of function
  if (nums.length === 3) {
    const a = nums[0];
    const b = nums[1];
    const c = nums[2];
    if (a < b + c) {
      return a + b + c;
    } else {
      return 0;
    }
  }

  // Case 1: build some triangles
  let perimeter = 0;
  let a = -Infinity;
  let b = nums[0];
  let c = nums[1];
  
  // reuse previous triangle sides to reduce number of array lookups
  // tradeoff: increased memory for quicker exec
  for (let i = 0; i < nums.length - 2; ++i) {
    a = b;
    b = c;
    c = nums[i+2];
    // console.log(`a:${a} b:${b} c:${c}`, )
    if (a < b + c) {
      perimeter = a + b + c;
      break;
    }
  }

  return perimeter;
}