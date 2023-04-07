import React from 'react';
import ReactDOM from 'react-dom/client';

const todoTitle = "ToDo App"
const todoDesc = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum aut consectetur esse illum similique temporibus fugiat eveniet optio quam amet";
const date = new Date();
const dateName = date.getDate();
const monthName = date.getMonth();
const yearName = date.getFullYear();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 className='headingStyle'>Todo App</h1>
    <div className='card'>
      <h3 className='cardTitle'>{todoTitle}</h3>
      <p className='cardDesc'>{todoDesc}</p>
      <p className='cardFooter'>{dateName+"/"+monthName+"/"+yearName}</p>
    </div>
  </div>
);
