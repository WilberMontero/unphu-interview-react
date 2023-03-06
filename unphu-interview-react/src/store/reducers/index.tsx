import UserReducer from './UserReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    users: UserReducer,
  })  