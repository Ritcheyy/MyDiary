import {combineReducers} from 'redux';
import noteReducer from './noteReducer';
import themeReducer from './themeReducer';

const rootReducer = combineReducers({
  noteReducer,
  themeReducer,
});

export default rootReducer;
