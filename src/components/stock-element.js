// @flow
/**
 * Create a HTML Element to hold a stock
 */
import { StockType, StockElementType } from './flow-types';

export const stockElement = (stock: StockType): StockElementType => {
  const el = document.createElement('div');
  el.classList.add('stock');
  const { change, percentage, price, title, id} = stock;
  el.dataset.id = id;
  el.innerText = `${change} ${percentage} ${price} ${title}`;
  return el;
};
