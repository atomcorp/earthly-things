/**
 * Injects our app into the document
 */

import { data } from './components/data.js';
import { stockElement } from './components/stock-element.js';

const root = document.getElementById('root');
root.innerText = 'Hello world';

data.then(res => root.appendChild(stockElement(res[0])));
