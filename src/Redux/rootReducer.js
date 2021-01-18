import { combineReducers } from 'redux';
import cards from './cardsSlice';
import game from './gameSlice';

export default combineReducers({
  cards,
  game,
});
