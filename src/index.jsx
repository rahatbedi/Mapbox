import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Maps from './Maps';
import { unregister } from './serviceWorker';

ReactDOM.render(<Maps />, document.getElementById('root'));
unregister();
