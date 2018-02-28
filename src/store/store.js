/**
 * Manage the state of the app
 */
import { StateType } from '../components/flow-types.js';

const buildStore = () => {
  let store: StateType = {
    data: [],
    activeStock: [],
    cache: {},
  };
  const returnStore = () => {
    return store;
  };
  const updateStocks = (newStocks) => {
    store = Object.assign({}, store, {activeStock: newStocks});
  };
  const updateData = (newData) => {
    store = Object.assign({}, store, { data: newData });
  };
  return {
    returnStore: returnStore,
    updateStocks: updateStocks,
    updateData: updateData,
  };
};

export const store = buildStore();
