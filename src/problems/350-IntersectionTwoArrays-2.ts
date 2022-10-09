export default function intersectionTwoArrays2(nums1: number[], nums2: number[]): number[] {
  let shorter: number[] = [];
  let longer: number[] = [];
  let intersection: number[] = [];

  if (nums1.length < nums2.length) {
    shorter = nums1;
    longer = nums2;
  } else {
    shorter = nums2;
    longer = nums1;
  }

  // asc sort
  shorter.sort((a,b) => a - b);
  longer.sort((a,b) => a - b);
  console.log(`shorter`, shorter)
  console.log(`longer`, longer)
  

  // pointers for respective arrays
  let s = 0;
  let l = 0;

  while (s < shorter.length && l < longer.length) {
    if (shorter[s] === longer[l]) {
      intersection.push(shorter[s]);
      s++;
      l++;
    } else if (shorter[s] > longer[l]) {
      l++;
    } else if (shorter[s] < longer[l]) {
      s++;
    }
  }
  return intersection;
}
