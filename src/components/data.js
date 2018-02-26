// @flow
/**
 * Gets the stocks api data and sends it to be parsed
 * Then, exported
 */

import { recieveStocksArray } from './parse-data.js';

const url = 'https://spreadsheets.google.com/feeds/list/0AhySzEddwIC1dEtpWF9hQUhCWURZNEViUmpUeVgwdGc/1/public/basic?alt=json';

export const data = fetch((url: string))
  .then(response => response.json())
  .then(response => recieveStocksArray(response.feed.entry));
