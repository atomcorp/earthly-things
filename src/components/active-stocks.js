/**
 * grab number of stocks, if none, or
 * check if in the cache,
 * add ids to activeStocks
 */
import { ActiveStocksType, StocksType } from './flow-types.js';

export const shiftArray = (
  activeStocks: ActiveStocksType
): ActiveStocksType => {
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
  const lastId = activeStocks.length - 1;
  // if last activeStocks id is in data
  if (data[activeStocks[lastId] + 1]) {
    return data[activeStocks[lastId] + 1].id;
  }
  return data[0].id;
};


const buildNewActiveStock = (
  data: StocksType
) => {
  return data.reduce((acc, stock, index) => {
    if (index < 5) {
      return [...acc, stock.id];
    }
    return acc;
  }, []);
};

const amendActiveStock = (
  activeStocks: ActiveStocksType,
  data: StocksType
) => {
  return mergeArray(shiftArray(activeStocks), getNextId(activeStocks, data));
};

export const handleActiveStocks = (
  activeStocks: ActiveStocksType,
  data: StocksType
): ActiveStocksType => {
  if (!activeStocks.length) {
    return buildNewActiveStock(data);
  }
  return amendActiveStock(activeStocks, data);
};
