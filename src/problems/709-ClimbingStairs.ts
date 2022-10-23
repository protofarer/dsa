export default function climbingStairs(n: number): number {
  // I couldn't bear the crudeness of a strictly computed method so I figured out the
  // pattern:
  // ones_current = ones_previous + twos_previous
  // twos_current = ones_previous

    let ones = 1; // count of paths with 1 at the tail
    let twos = 0; // count of paths with 2 at the tail

    for (let i = 1; i < n; ++i) {
      const ones_previous = ones;
      ones = ones + twos;
      twos = ones_previous;
    }

    return ones + twos;
  }
