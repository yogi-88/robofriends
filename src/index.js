import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { robots } from './components/robots';

import 'tachyons';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card id={robots[0].id} name={robots[0].name} username={robots[0].username} email={robots[0].email}></Card>
    <Card id={robots[1].id} name={robots[1].name} username={robots[1].username} email={robots[1].email}></Card>
    <Card id={robots[2].id} name={robots[2].name} username={robots[2].username} email={robots[2].email}></Card>
  </React.StrictMode>
);


