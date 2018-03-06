/**
 * Render 10 stocks,
 * set loop,
 * change and swap them over
 */
import morph from 'nanomorph';
import { store } from '../store/store.js';
import { handleActiveStocks } from '../components/active-stocks.js';
import { checkCache } from './cache.js';

const appendStocks = (root) => {
  // root.innerHTML = '';
  // get latest stocks & update
  const activeStocks = handleActiveStocks(
    store.returnStore().activeStock,
    store.returnStore().data
  );
  store.updateStocks(activeStocks);
  // draw
  const clone = root.cloneNode(true);
  clone.innerHTML = '';
  activeStocks.forEach((id) => {
    clone.appendChild(
      checkCache(store.returnStore().data[id], store.returnStore().cache)
    );
  });
  morph(root, clone);
  // root.appendChild(fragment);
  setTimeout(() => {
    window.requestAnimationFrame(() => {
      appendStocks(root);
    });
  }, 3000);
};

export const render = appendStocks;
