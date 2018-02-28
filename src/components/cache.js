// @flow
/**
 * Check if a Stock element has already been created,
 * if not create and add to cache,
 * otherwise retreive cache
 */

import { StockType, StockCache } from './flow-types';
import { stockElement } from './stock-element.js';

export const handleCaching = (
  stock: StockType,
  cache: StockCache
): StockCache => {
  if (!cache[stock.title]) {
    return Object.assign(
      {}, stockElement(stock), cache
    );
    // return [...cache, stockElement(stock)];
  }
  return cache;
};

export const stockInCache = (
  title: string,
  cache: StockCache
): StockCache | void => {
  return cache[title];
};

