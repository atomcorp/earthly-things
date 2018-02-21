/**
 * Injects our app into the document
 */

import { data } from './components/data.js';

const root = document.getElementById('root');
root.innerText = 'Hello world';

data.then(res => console.log(res));
