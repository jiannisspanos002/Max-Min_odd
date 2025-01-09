class Iteration {
  constructor() {}

  findMinMax(markets) {
    if (!markets) {
      console.error("Markets data not found!");
      return;
    }

    let minOdd = Infinity;
    let maxOdd = -Infinity;
    let minMarket = null;
    let maxMarket = null;
    markets.forEach((market) => {
      market.odds.forEach((odd) => {
        if (odd.odd < minOdd) {
          minOdd = odd.odd;
          minMarket = { marketName: market.name, odd };
        }
        if (odd.odd > maxOdd) {
          maxOdd = odd.odd;
          maxMarket = { marketName: market.name, odd };
        }
      });
    });
    console.log("Market with Minimum Odd:", minMarket);
    console.log("Market with Maximum Odd:", maxMarket);
  }
}

export default Iteration
