import React from 'react';
import ReactDOM from 'react-dom/client';

const title = "Welcome to my Profile!";

const h2style = {
  backgroundColor: "purple",
  color: "white",
  textAlign: "center",
  padding: "15px"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 style={{color: "red"}}>Hello</h1>
    <h2 style={h2style}>{title}</h2>
    <p className='headingStyle'>This is Asif Shahriar, Welcome to my profile</p>
  </div>
);
