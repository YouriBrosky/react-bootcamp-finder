import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
    <React.Fragment>
        <Provider store={store}>
            <App />
        </Provider>
    </React.Fragment>,
    document.getElementById('root')
);
