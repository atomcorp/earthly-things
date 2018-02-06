import React, { Component } from 'react';
import Stock from '../Stock/Stock.js';
import { Page } from '../../container/index';
import { data as stocksData } from '../../data/stocks.js';
import { recieveStocksArray } from './parseStocks.js';

class Stocks extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this.loadData();
    this.data = [];
  }

  loadData() {
    new Promise((resolve, reject) => {
      resolve(stocksData);
    }).then((resolved) => {
      this.storeData(recieveStocksArray(resolved.feed.entry));
      this.updateLoading();
    });
  }

  storeData(data) {
    this.data = data;
  }

  updateLoading() {
    this.setState({
      loading: false
    })
  }

  renderStocks() {
    return this.data.reduce((acc, val, index) => {
      return [...acc, <Stock key={index} values={val} />];
    }, [])
  }

  render() {
    return (
      <Page>
        {
          this.state.loading
          ? <div>Loading</div>
          : this.renderStocks()
        }

      </Page>
    );
  }
}

export default Stocks;