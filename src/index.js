import { data } from './app/data/stocks.js';

const root = document.getElementById('root');
root.innerText = 'Hello world';

data.then(res => console.log(res));
