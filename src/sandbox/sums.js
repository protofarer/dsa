let n = (() => {
  if (process.argv.length === 3) {
    return parseInt(process.argv[2]);
  } else {
    return 5;
  }
})();

function mystery(n) {
  console.log(`--- n=${n} ---`);

  let r = 0;
  for (let i = 1; i <= n - 1; ++i) {
    // console.log(`i=${i}`);
    for (let j = i + 1; j <= n; ++j) {
      // console.log(`j=${j}`);
      for (let k = 1; k <= j; ++k) {
        r += 1;
        // console.log(`k=${k} r=${r}`);
      }
    }
  }
  return r;
}

console.log(`mystery:`, mystery(n));

// from algorist
function p1(n) {
  const a = (n * (n * (n + 1))) / 2;
  const b = (-1 * (n * (n + 1) * (2 * n + 1))) / 12;
  const c = (-1 * (n * (n + 1))) / 4;
  return a + b + c;
}

// bad, missed a factor
function h1(n) {
  const a = -8 * n ** 3;
  const b = -11 * n ** 2;
  const c = -2 * n;
  const k = -1;
  return (a + b + c + k) / 12;
}

// bad, missed a factor or sign
function h2(n) {
  return (n / 12) * (-8 * n ** 2 - 3 * n - 2);
}

// bad, missed a sign
function h3(n) {
  return (n - n ** 3) / 6;
}

// good!
function h4(n) {
  return (n ** 3 - n) / 3;
}

console.log(`h4`, h4(n));
