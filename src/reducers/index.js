import { combineReducers } from 'redux';
import entriesReducer from './entries';

const rootReducer = combineReducers({
  entries: entriesReducer,
});

export default rootReducer;
