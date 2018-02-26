/**
 * Manage the state of the app
 */
import { data } from './data.js';

const buildStore = (data) => {
  let state = {
    data,
    activeStock: [],
    cache: {},
  };
  const returnState = () => {
    return state;
  };
  return {
    returnState: returnState,
  };
};

export const store = buildStore(data.then(res => res));
