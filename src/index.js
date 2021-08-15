import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './sass-styles/styles.scss'
import { SocialAcademyApp } from './SocialAcademyApp';

ReactDOM.render(
  <React.StrictMode>
    <SocialAcademyApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// services.worker()g