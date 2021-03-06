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
  const updateCache = newStock => {
    store = Object.assign(
      {},
      store,
      {
        cache: Object.assign({}, store.cache, newStock),
      }
    );
  };
  return {
    returnStore: returnStore,
    updateStocks: updateStocks,
    updateData: updateData,
    updateCache: updateCache,
  };
};

export const store = buildStore();
