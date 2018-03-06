/**
 * Injects our app into the document
 */

import { data } from './components/data.js';
import { store } from './store/store.js';
import { render } from './components/render-stocks.js';
import { stockContainerElement } from './components/elements.js';
import 'web-animations-js';
import './style/index.scss';

const root = document.getElementById('root');

data.then(res => {
  store.updateData(res);
  render(stockContainerElement(root));
});
