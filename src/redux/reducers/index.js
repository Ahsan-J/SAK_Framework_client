import {combineReducers} from 'redux';
import reducer from './reducer.js';
import bugs from './bugs.js'
import user from './user.js'
import test from './test.js'

export default combineReducers({
    reducer,
    bugs,
    user,
    test,
});