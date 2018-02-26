/**
 * Injects our app into the document
 */

import { data } from './components/data.js';
import { stockElement } from './components/stock-element.js';

const root = document.getElementById('root');
root.innerText = 'Hello world';

const tempPrint = (stockData) => {
  const container = document.createDocumentFragment();
  stockData.forEach(stock => container.appendChild(stockElement(stock)));
  return container;
};

data.then(res => root.appendChild(tempPrint(res)));
