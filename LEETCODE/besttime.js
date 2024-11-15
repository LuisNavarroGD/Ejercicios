/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let minimo = prices[0];
  let maximo = 0;

  for (let i = 1; i < prices.length; i++) {
    minimo = Math.min(minimo, prices[i]);
    maximo = Math.max(maximo, prices[i] - minimo);
  }
  return maximo;
};