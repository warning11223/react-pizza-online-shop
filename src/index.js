import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from 'react-redux'
import store from "./redux/store";


import './scss/app.scss';




console.log(store.getState())






ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

