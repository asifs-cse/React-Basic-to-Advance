import React  from "react";
import Card from './components/Card'
import data from './data.json'



function App(){
  return <div>
          <h1 className='headingStyle'>Todo App</h1>
          <Card titleText={data[0].title} descText = {data[0].desc}/>
          <Card titleText="ToDo App" descText="Welcome to our ToDo App"/>
          <Card titleText="ToDo App" descText="Welcome to our ToDo App"/>
          <Card titleText="ToDo App" descText="Welcome to our ToDo App"/>

        </div>
}

export default App;
