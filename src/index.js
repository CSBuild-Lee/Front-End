import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

// Import Reducer here
import App from './App';

// Create store here

const rootElement = document.getElementById('root');
ReactDOM.render(
    <App />,
    rootElement
)