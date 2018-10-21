import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NoSupport from './NoSupport';
import * as serviceWorker from './serviceWorker';

if ('layoutWorklet' in CSS) {
  CSS.layoutWorklet.addModule(`${process.env.PUBLIC_URL}/worklet.js`);
  ReactDOM.render(<App />, document.getElementById('root'));
} else {
  ReactDOM.render(<NoSupport />, document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
