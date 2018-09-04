import {combineReducers} from 'redux';
import reducer from './reducer.js';
import bugs from './bugs.js'
import user from './user.js'
import test from './test.js'
import application from './application.js'
import module from './module.js'
import control from './control.js'
import screen from './screen.js'

export default combineReducers({
    reducer,
    bugs,
    user,
    test,
    application,
    module,
    control,
    screen,
});