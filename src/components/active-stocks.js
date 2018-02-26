/**
 * grab number of stocks, if none, or
 * check if in the cache,
 * add ids to activeStocks
 */
import { ActiveStocksType, StocksType } from './flow-types.js';

export const shiftArray = (activeStocks: ActiveStocksType): ActiveStocksType => {
  return activeStocks.slice(1, activeStocks.length);
};

export const mergeArray = (
  activeStocks: ActiveStocksType,
  idToAdd: number
): ActiveStocksType => {
  return [...activeStocks, idToAdd];
};

export const getNextId = (
  activeStocks: ActiveStocksType,
  data: StocksType
): number => {
  if (data[activeStocks[activeStocks.length - 1] + 1]) {
    return data[activeStocks[activeStocks.length - 1] + 1].index;
  }
  return data[0].index;
};

export const handleActiveStocks = (
  activeStocks: ActiveStocksType,
  data: StocksType
): ActiveStocksType => {
  if (!activeStocks.length) {
    return data.slice(0, 9);
  }
  return mergeArray(shiftArray(activeStocks), getNextId(activeStocks, data));
};
