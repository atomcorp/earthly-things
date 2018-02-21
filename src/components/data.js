import { recieveStocksArray } from './parse-data.js';

const url = "https://spreadsheets.google.com/feeds/list/0AhySzEddwIC1dEtpWF9hQUhCWURZNEViUmpUeVgwdGc/1/public/basic?alt=json";

export const data = fetch(url)
         .then(response => response.json())
         .then(data => recieveStocksArray(data.feed.entry));