// approach 1
export function main1(arr: number[]): number[] | null {
  if (arr.length < 1) return null;

  quickSort1(arr, 0, arr.length - 1);

  return arr;
}

function quickSort1(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) return;

  const p_idx = partition1(arr, lo, hi);

  quickSort1(arr, lo, p_idx - 1);
  quickSort1(arr, p_idx + 1, hi);
}

function partition1(arr: number[], lo: number, hi: number): number {
  const p_val = arr[hi];

  let p_idx = lo - 1;
  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= p_val) {
      p_idx++;
      const tmp = arr[p_idx];
      arr[p_idx] = arr[i];
      arr[i] = tmp;
    }
  }

  p_idx++;
  const tmp = arr[p_idx];
  arr[p_idx] = p_val;
  arr[hi] = tmp;

  return p_idx;
}

// approach 2
export function main2(arr: number[]): number[] | null {
  if (arr.length < 1) return null;
  quickSort2(arr, 0, arr.length - 1);
  return arr;
}

function quickSort2(arr: number[], lo: number, hi: number): void {
  if (lo >= hi) return;

  const p_idx = partition2(arr, lo, hi);

  quickSort2(arr, lo, p_idx - 1);
  quickSort2(arr, p_idx + 1, hi);
}

function partition2(arr: number[], lo: number, hi: number): number {
  let p_idx = lo - 1;

  for (let i = lo; i < hi; ++i) {
    if (arr[i] <= arr[hi]) {
      p_idx++;
      const tmp = arr[i];
      arr[i] = arr[p_idx];
      arr[p_idx] = tmp;
    }
  }

  p_idx++;
  const tmp = arr[p_idx];
  arr[p_idx] = arr[hi];
  arr[hi] = tmp;

  return p_idx;
}

// approach 3
export function main3(arr: number[]): number[] | null {
  if (arr.length < 0) return null;
  quickSort3(arr, 0, arr.length - 1);
  return arr;
}

function quickSort3(arr: number[], lo: number, hi: number): void {
  if (lo < hi) {
    const p = partition3(arr, lo, hi);
    quickSort3(arr, lo, p - 1);
    quickSort3(arr, p + 1, hi);
  }
}

function partition3(arr: number[], lo: number, hi: number): number {
  // console.log(`START PART, lo:${lo}, hi:${hi},  arr`, arr);

  const p_val = arr[lo];
  let p_idx = lo;
  for (let i = lo + 1; i < hi + 1; ++i) {
    if (arr[i] <= p_val) {
      p_idx++;
      // console.log(`swapped arr[p_i]:${arr[p_idx]} with arr[i]:${arr[i]}`);
      const tmp = arr[p_idx];
      arr[p_idx] = arr[i];
      arr[i] = tmp;
    }
  }
  arr[lo] = arr[p_idx];
  arr[p_idx] = p_val;
  // console.log(`END PART lo:${lo}, hi:${hi}, p_idx:${p_idx}, arr:`, arr);
  return p_idx;
}

// approach 4
export function main4(arr: number[]): number[] | null {
  if (arr.length < 0) return null;
  quickSort4(arr, 0, arr.length - 1);
  return arr;
}

function quickSort4(arr: number[], lo: number, hi: number): void {
  if (lo < hi) {
    const p = partition4(arr, lo, hi);
    quickSort4(arr, lo, p - 1);
    quickSort4(arr, p + 1, hi);
  }
}

function partition4(arr: number[], lo: number, hi: number): number {
  const m = lo + Math.floor((hi - lo) / 2);
  let p_val_i = m;
  // console.log(`START PART, lo:${lo}, hi:${hi}, m:${m}, arr`, arr);
  const p_val = arr[m];

  let p_idx = lo - 1;
  for (let i = lo; i <= hi; ++i) {
    if (i === m) continue;
    if (arr[i] <= p_val) {
      p_idx++;
      if (p_idx === p_val_i) {
        p_val_i = i;
      }
      // console.log(`swapped arr[p_i]:${arr[p_idx]} with arr[i]:${arr[i]}`);
      const tmp = arr[p_idx];
      arr[p_idx] = arr[i];
      arr[i] = tmp;
    }
  }
  p_idx = Math.min(p_idx + 1, arr.length - 1);
  const tmp = arr[p_val_i];
  arr[p_val_i] = arr[p_idx];
  arr[p_idx] = tmp;
  // console.log(`END PART lo:${lo}, hi:${hi}, p_idx:${p_idx}, arr:`, arr);
  return p_idx;
}
