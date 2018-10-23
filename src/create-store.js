import { createStore } from 'redux';
import sectionReducer from './reducer/category-reducer';

export default () => {
  return createStore(sectionReducer);
};
