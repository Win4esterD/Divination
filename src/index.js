import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import ReactDOM from 'react-dom';
import App from './components/App.js'
import {render} from 'react-dom';

const app = ReactDOMClient.createRoot(document.querySelector('#root'));
app.render(<App />);