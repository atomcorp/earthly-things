/**
 * Receive the stocks
 * add the animation
 */

export const animateStocks = (stocks: Element) => {
  [...stocks.children].forEach(stock => {
    stock.animate([
      { transform: 'translate(0)' },
      { transform: 'translate(-100%, 0)' },
    ], 3000);
  });
};
