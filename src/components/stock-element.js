// @flow
/**
 * Create a HTML Element to hold a stock
 */
import { StockType, StockElementType } from './flow-types';

export const stockElement = (stock: StockType): StockElementType => {
  const { change, percentage, price, title, id} = stock;
  const el = document.createElement('div');
  el.classList.add('stock');
  Number(change) > 0
    ? el.classList.add('stock--up')
    : el.classList.add('stock--down');
  el.id = id;
  el.appendChild(
    stockItemElement(evenStrings([title, change], 14), 'stock__top')
  );
  el.appendChild(
    stockItemElement(evenStrings([price, percentage], 14), 'stock__bottom')
  );
  // el.appendChild(stockItemElement(price, 'stock__price'));
  // el.appendChild(stockItemElement(percentage, 'stock__percentage'));
  return el;
};

const stockItemElement = (text: string, className: string) => {
  const el = document.createElement('div');
  el.innerHTML = text;
  el.classList.add(className);
  return el;
};

const evenStrings = (strings: Array<string>, count: number) => {
  let difference = count - (strings[0].length + strings[1].length);
  if (difference < 0) {
    difference = 0;
  }
  const space = Array.from(Array(difference)).map(() => '&nbsp;').join('');
  return [...strings[0], ...space, ...strings[1]].join('');
};
