export function triangular(n) {
  return (n * (n + 1)) / 2;
}

export function pyramidal(n) {
  return (Math.pow(n, 3) - n) / 6;
}

let x = 2;
while (true) {
  if (triangular(x) > 22) {
    console.log(x - 1);
    break;
  }

  x++;
}

function sumTri(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    sum += triangular(i);
  }
  return sum;
}

for (let i = 1; i <= 10; ++i) {
  console.log(
    `(${i}) tri: ${triangular(i)}  pyr: ${pyramidal(i + 1)}  sumtri: ${sumTri(
      i + 1
    )}`
  );
}
