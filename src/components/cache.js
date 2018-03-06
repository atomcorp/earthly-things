// @flow
/**
 * Check if a Stock element has already been created,
 * if not create and add to cache,
 * otherwise retreive element from cache
 */

import { StockType, StockCache } from './flow-types';
import { stockElement } from './stock-element.js';
import { store } from '../store/store.js';

export const checkCache = (
  stock: StockType,
  cache: StockCache
): StockCache => {
  if (!cache[stock.id]) {
    const newStockElement = stockElement(stock);
    store.updateCache({ [stock.id]: newStockElement });
    return newStockElement;
  }
  return cache[stock.id];
};

