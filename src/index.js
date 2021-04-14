import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Avatar from './Avatar'
import Avatarlist from './Avatarlist'
import reportWebVitals from './reportWebVitals';

//
// react props are like html attribute but are not changable like attribute, but can be passed through parent to child.
//

ReactDOM.render(
  <React.StrictMode>
    <Avatarlist/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your Demo, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

