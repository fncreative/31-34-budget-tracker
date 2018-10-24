import { combineReducers } from 'redux';
import category from './category-reducer';
import cards from './card-reducer';

export default combineReducers({
  category,
  cards,
});
