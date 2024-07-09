function maxProfit(prices: number[]): number {
    const n = prices.length;

    let maxProfit = 0;
    let buy = prices[0];

    for (let i = 1; i < n; ++i) {
        if (prices[i] > buy) {
            maxProfit += prices[i] - buy;
            buy = prices[i];
        } else {
            buy = prices[i];
        }
    }
    return maxProfit;
};