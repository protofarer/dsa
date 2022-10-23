export default function minCostClimbingStairs(cost: number[]): number {
  let x2 = cost[0];
  let x1 = cost[1];
  if (cost.length <= 2) return Math.min(x1, x2);

  for (let i = 2; i < cost.length; ++i) {
    const curr = cost[i] + Math.min(x1, x2);
    x2 = x1;
    x1 = curr;
  }

  return Math.min(x2, x1);
}