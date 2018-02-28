/**
 * Injects our app into the document
 */

import { data } from './components/data.js';
import { store } from './store/store.js';
import { render } from './components/render-stocks.js';

const root = document.getElementById('root');
// root.innerText = 'Hello world';

// const tempPrint = (stockData) => {
//   const container = document.createDocumentFragment();
//   stockData.forEach(stock => container.appendChild(stockElement(stock)));
//   return container;
// };

data.then(res => {
  store.updateData(res);
  render(root);
});
