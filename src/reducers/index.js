import { combineReducers } from 'redux';

import Logics from './reducer_logic';

// everything inside is a piece of state
const rootReducer = combineReducers({
  logic: Logics
});

export default rootReducer;
