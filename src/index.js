import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import configureStore from "./app/store.js"
import {Provider} from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
     <Provider store={configureStore}> 
      <App />
    </Provider>
      
  
  </React.StrictMode>,
  document.getElementById('root')
);


