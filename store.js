import { createStore } from 'redux';
import reducer from './reducers/todoReducer';

export default initialState => {
  const store = createStore(reducer, initialState);
  return store;
};
