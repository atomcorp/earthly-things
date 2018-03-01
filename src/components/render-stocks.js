/**
 * Render 10 stocks,
 * set loop,
 * change and swap them over
 */

import { store } from '../store/store.js';
import { handleActiveStocks } from '../components/active-stocks.js';
import { stockElement } from './stock-element.js';

const appendStocks = (root) => {
  root.innerHTML = '';
  // get latest stocks & update
  const activeStocks = handleActiveStocks(
    store.returnStore().activeStock,
    store.returnStore().data
  );
  store.updateStocks(activeStocks);
  // draw
  const fragment = document.createDocumentFragment();
  activeStocks.forEach((id) => {
    fragment.appendChild(stockElement(store.returnStore().data[id]));
  });
  root.appendChild(fragment);
  // setTimeout(() => {
  //   window.requestAnimationFrame(() => {
  //     appendStocks(root);
  //   });
  // }, 500);
};

export const render = appendStocks;
