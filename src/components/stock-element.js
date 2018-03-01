// @flow
/**
 * Create a HTML Element to hold a stock
 */
import { StockType, StockElementType } from './flow-types';

export const stockElement = (stock: StockType): StockElementType => {
  const el = document.createElement('div');
  el.classList.add('stock');
  const { change, percentage, price, title, id} = stock;
  Number(change) > 0 
    ? el.classList.add('stock--up')
    : el.classList.add('stock--down');
  el.dataset.id = id;
  el.innerText = `${change} ${percentage} ${price} ${title}`;
  return el;
};
