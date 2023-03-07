function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i < Math.sqrt(x); ++i) {
    if (x % i === 0) return false;
  }
  return true;
}

function nextPrimeFrom(x) {
  let i = x;
  while (!isPrime(i)) {
    i++;
  }
  return i;
}

let a = nextPrimeFrom(335);
console.log(a);

// first 25 primes

let b = 2;
let arr = [];
for (let i = 0; i < 250; i++) {
  arr.push(b);
  b = nextPrimeFrom(b + 1);
}

console.log(arr);
