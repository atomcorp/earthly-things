// @flow
import { StocksType, StockType, DataType } from './flow-types';

export const recieveStocksArray = (data: Array<DataType>): StocksType => {
  return indexStocks(shuffle(cleanseData(parseData(data))));
};

// TODO: accept "0.00" inputs
export const cleanseData = (data: StocksType): StocksType => {
  return data.reduce((acc, val) => {
    if (
      !val.title ||
      val.price === '0' ||
      val.change === '#N/A'
    ) {
      return [...acc];
    }
    return [...acc, val];
  }, []);
};

export const parseData = (data: Array<DataType>): StocksType => {
  return data.reduce((acc, val, i) => {
    const title = parseName(val.title['$t']);
    const price = parsePrice(val.content['$t']);
    const change = parseChange(val.content['$t']);
    const percentage = parsePercentage(price, change);
    return [...acc, {
      title,
      price,
      change,
      percentage,
    }];
  }, []);
};

export const parseName = (name: string): string => {
  return name.split('.', 1)[0];
};

export const parsePrice = (string: string): string => {
  return string.slice(
    string.lastIndexOf('price: ') + 7,
    string.lastIndexOf(', change')
  );
};

export const parseChange = (string: string): string => {
  return string.slice(
    string.lastIndexOf('change: ') + 8
  );
};

export const parsePercentage = (total: string, difference: string): string => {
  return ((Number(difference) / Number(total)) * 100).toPrecision(4) + '%';
};

const indexStocks = (stocks: StocksType) => {
  return stocks.map((stock, i) => {
    return Object.assign(
      {},
      stock,
      {
        id: i,
      },
    );
  });
};

// Copy from https://stackoverflow.com/a/6274381/2368141
// Fisher-Yates shuffle
/* eslint-disable */
function shuffle(a: StockType): StockType {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
/* eslint-enable */
