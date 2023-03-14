import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { robots } from './components/robots';
import CardList from './components/CardList';
import 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardList robots={robots}></CardList>
  </React.StrictMode>
);


