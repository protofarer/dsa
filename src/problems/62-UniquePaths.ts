// mathematical solution
// export default function uniquePaths(m: number, n: number): number {
//   function factorial(n: number) {
//     return new Array(n).fill(0).map((_, i) => i + 1).reduce((p, c) => p * c);
//   }
//   return factorial(m - 1 + n - 1)/(factorial(n - 1) * factorial(m - 1));
// }

export default function uniquePaths(m: number, n: number): number {
  // below initialization is problematic because each subarray is actually a reference to the initial subarray.
  // const dp: number[][] = new Array(m).fill(new Array(n).fill(0));

  let dp: number[][] = [];
  for (let i = 0; i < m; ++i) {
    dp[i] = new Array(n).fill(0);
  }
  
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (i === 0 || j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
    }
  }

  return dp[m-1][n-1];
}