require('file-loader?name=[name].[ext]!../public/index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import { StateContextProvider } from './components/state-context/state-context';

const appElement = document.getElementById('container');

ReactDOM.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>,
  appElement
);
