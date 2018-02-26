import { 
  shiftArray,
  mergeArray,
  getNextId
 } from '../components/active-stocks.js';

const testIds = Array.from(Array(10)).map((x, i) => i);
const testStocks = Array.from(Array(11)).map((x, i) => {return {index: i}});

test('Shift array removes first item', () => {
  expect(shiftArray(testIds)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test('Merge array adds item to end', () => {
  expect(mergeArray(testIds, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test('Gets next item, or first', () => {
  const testStocks = Array.from(Array(11)).map((x, i) => { return { index: i } });
  expect(getNextId(testIds, testStocks)).toEqual(10);
  const testLimitedStocks = Array.from(Array(10)).map((x, i) => { return { index: i } });
  expect(getNextId(testIds, testLimitedStocks)).toEqual(0);
});