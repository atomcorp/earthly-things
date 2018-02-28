import {
  parseName,
  parsePrice,
  parseChange,
  parsePercentage
} from '../components/parse-data.js';

const testString = 'name: ANGLO AMERICAN, price: 1843.6, change: 55.2';

test('Parse name from string', () => {
  const testInitials = 'AAL.L';
  expect(parseName(testInitials)).toEqual('AAL');
});

test('Parse price from string', () => {
  expect(parsePrice(testString)).toEqual('1843.6');
});

test('Parse change from string', () => {
  expect(parseChange(testString)).toEqual('55.2');
});

test('Parse percentage', () => {
  expect(parsePercentage('215', '3')).toEqual('1.395%');
});
