import { combineReducers } from 'redux';

import pager from './pager';
import boarder from './boarder';
import scoreboard from './scoreboard';

export default combineReducers({
   	pager,
   	boarder,
   	scoreboard
});