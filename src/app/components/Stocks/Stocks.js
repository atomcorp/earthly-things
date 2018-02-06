import React from 'react';
import { Page } from '../../container/index';
import { data as stocksData } from '../../data/stocks.js';
import { recieveStocksArray } from './parseStocks.js';

const data = new Promise((resolve, reject) => {
  resolve(stocksData);
});

data.then((resolved) => {
  console.log(recieveStocksArray(resolved.feed.entry));
});


const Stocks = () => {
  return (
    <Page>Stocks</Page>
  );
}

export default Stocks;