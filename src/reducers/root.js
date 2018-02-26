import { combineReducers } from 'redux';
import locationSettings from './locationSettings.js';
import dataSettings from './dataSettings.js';

const rootReducer = combineReducers({
  locationSettings,
  dataSettings
});

export default rootReducer;
