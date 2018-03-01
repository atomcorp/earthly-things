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
  el.appendChild(stockItemElement(title, 'stock__title'));
  el.appendChild(stockItemElement(price, 'stock__price'));
  el.appendChild(stockItemElement(change, 'stock__change'));
  el.appendChild(stockItemElement(percentage, 'stock__percentage'));
  return el;
};

const stockItemElement = (text: string, className: string) => {
  const el = document.createElement('div');
  el.innerText = text;
  el.classList.add(className);
  return el;
};
