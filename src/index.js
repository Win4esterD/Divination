import React from 'react';
import * as ReactDOMClient from "react-dom/client";
import App from './App';
import './styles/defaults.scss';



const app = ReactDOMClient.createRoot(document.querySelector('#app'));
app.render(<App />);