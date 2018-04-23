import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import appStore from './redux/store.js'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider store={appStore}>
    <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
