export function main<T>(arr: T[]): T[] | null {
  if (arr.length === 0) return null;

  let i = 0;
  while (i < arr.length - 1) {
    let j = 0;
    while (j < arr.length - 1 - i) {
      if (arr[j] > arr[j + 1]) {
        const x = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = x;
      }
      j++;
    }
    i++;
  }

  return arr;
}
