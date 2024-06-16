// * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
  const n = prices.length;
  let buyPrice = prices[0];
  // when we buy and sell at same time
  let maximumProfit = 0;

  for (let i = 0; i < n; ++i) {
    if (prices[i] < buyPrice) buyPrice = prices[i];
    else {
      maximumProfit = Math.max(maximumProfit, prices[i] - buyPrice);
    }
  }
  return maximumProfit;
}
