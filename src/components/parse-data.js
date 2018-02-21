// @flow

type StocksType = Array<StockType>

type StockType = {
  change: string,
  percentage: string,
  price: string,
  title: string
}

export const recieveStocksArray = (data: Array<mixed>): StocksType => {
  return shuffle(cleanseData(parseData(data)));
};

// TODO: accept "0.00" inputs
const cleanseData = (data: StocksType): StocksType => {
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

const parseData = (data: Array<mixed>): StocksType => {
  return data.reduce((acc, val) => {
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

const parseName = (name: string): string => {
  return name.split('.', 1)[0];
};

const parsePrice = (string: string): string => {
  return string.slice(
    string.lastIndexOf('price: ') + 7,
    string.lastIndexOf(', change')
  );
};

const parseChange = (string: string): string => {
  return string.slice(
    string.lastIndexOf('change: ') + 8
  );
};

const parsePercentage = (total: string, difference: string): string => {
  return ((Number(difference) / Number(total)) * 100).toPrecision(4) + '%';
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
