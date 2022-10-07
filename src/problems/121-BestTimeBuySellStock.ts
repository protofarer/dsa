export default function bestTimeBuySellStock(prices: number[]): number {
  let profit = 0;
  let max = prices[prices.length - 1];

  for (let i = prices.length - 2; i >= 0; --i) {
    if (prices[i] > max) {
      max = prices[i];
    } else if (max - prices[i] > profit) {
      profit = max - prices[i];
    }
  }

  return profit;
}