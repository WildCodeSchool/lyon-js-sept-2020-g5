import { combineReducers } from 'redux';
import cards from './cardsSlice';
import game from './gameSlice';
import options from './optionsSlice';

export default combineReducers({
  cards,
  game,
  options,
});
