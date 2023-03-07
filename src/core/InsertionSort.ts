// in place, with splice and whiles
export function insertionSort(arr: number[]): number[] | null {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr;

  let i = 1;
  while (i < arr.length) {
    let j = i - 1;
    while (j >= -1) {
      // if (j === -1) {
      //   const x = arr.splice(i, 1)[0];
      //   arr.splice(0, 0, x);
      // } else
      if (arr[i] > arr[j] || j === -1) {
        const x = arr.splice(i, 1)[0];
        arr.splice(j + 1, 0, x);
        break;
      }
      j--;
    }
    i++;
  }

  return arr;
}

// in place, 2 for loops, complicated
export function insertionSort2(arr: number[]): number[] | null {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr;

  for (let i = 1; i < arr.length; ++i) {
    const key = arr[i];
    for (let j = i - 1; j >= -1; --j) {
      if (key >= arr[j]) {
        arr[j + 1] = key;
        break;
      } else if (j === -1) {
        arr[0] = key;
        break;
      }
      arr[j + 1] = arr[j];
    }
  }

  return arr;
}

// in place, assignments only (no shift), more elegant
export function insertionSort3(arr: number[]): number[] | null {
  if (arr.length === 0) return null;
  if (arr.length === 1) return arr;

  for (let i = 1; i < arr.length; ++i) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && key < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}
