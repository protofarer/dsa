export function mergeSort(arr: number[]): number[] | null {
  if (arr.length === 0) return null;
  return divide(arr);
}

function divide(arr: number[]): number[] {
  if (arr.length === 1) return arr;

  const m = Math.floor(arr.length / 2);
  const leftSorted = divide(arr.slice(0, m));
  const rightSorted = divide(arr.slice(m));

  return merge(leftSorted, rightSorted);
}

// sorts ascending
function merge(leftSorted: number[], rightSorted: number[]): number[] {
  let i = 0;
  let j = 0;
  let merged: number[] = [];
  while (i < leftSorted.length && j < rightSorted.length) {
    if (leftSorted[i] <= rightSorted[j]) {
      merged.push(leftSorted[i]);
      i++;
    } else {
      merged.push(rightSorted[j]);
      j++;
    }
  }
  merged.push(...leftSorted.slice(i), ...rightSorted.slice(j));
  return merged;
}
