export default function fibonacciNumber(n: number): number {
  if (n === 1) return 1;
  if (n === 0) return 0;
  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}
