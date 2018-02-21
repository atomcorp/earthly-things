// @flow
/**
 * Create a HTML Element to hold a stock
 */
import { StockType } from './flow-types';

export const stockElement = (stock: StockType): HTMLDivElement => {
  const el = document.createElement('div');
  el.classList.add('stock');
  const { change, percentage, price, title} = stock;
  el.innerText = `${change} ${percentage} ${price} ${title}`;
  return el;
};
