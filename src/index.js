import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import configStore from './store/configStore';
import {Provider} from 'react-redux';
import App from './app';
import  * as serviceWorker from './serviceWorker';

let store=configStore()

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
