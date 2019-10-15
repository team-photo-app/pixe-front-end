import { combineReducers } from 'redux';

import userReducer from './userReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
  userReducer,
  eventReducer,
});

export default rootReducer;