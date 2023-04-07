import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

const todoTitle = "Call Family";
const doToDescription ="Welcome to my blog, This is Asif Shahriar";
const date = new Date();

root.render(
  <div>
    <h1>Welcome to React</h1>
    <h3>{todoTitle}</h3>
    <h3>{date}</h3>
    <p>{doToDescription}</p>
    <p>{new Date().getFullYear}</p>
  </div>
  
);
