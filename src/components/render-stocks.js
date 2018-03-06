/**
 * Render 10 stocks,
 * set loop,
 * change and swap them over
 */
import morph from 'nanomorph';
import { store } from '../store/store.js';
import { handleActiveStocks } from '../components/active-stocks.js';
import { checkCache } from './cache.js';
import { animateStocks } from './animate-stocks.js';

let lastTime = 0;

// https://stackoverflow.com/a/32657109
const appendStocks = (root, time) => {
  if ((time - lastTime) < 3000) {
    requestAnimationFrame(time => appendStocks(root, time));
    return;
  }
  lastTime = time;
  updateStocks(root);
  requestAnimationFrame(time => appendStocks(root, time));
};

const updateStocks = root => {
  // get latest stocks & update
  const activeStocks = handleActiveStocks(
    store.returnStore().activeStock,
    store.returnStore().data
  );
  store.updateStocks(activeStocks);
  // copy the current stocks div tree
  const rootClone = root.cloneNode(true);
  rootClone.innerHTML = '';
  activeStocks.forEach((id) => {
    rootClone.appendChild(
      checkCache(store.returnStore().data[id], store.returnStore().cache)
    );
  });
  // diff the stocks div children and update
  morph(root, rootClone);
  // use JS to translate the stocks left <-
  animateStocks(root);
};

export const render = appendStocks;
