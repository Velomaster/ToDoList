import React, { useState } from "react";
import Task from './Task';
import InputArea from './InputArea';

function App() {

  const [savedTask, setSavedTask] = useState([]);

  function addTask(inputText) {
    if (!inputText) {
      alert("Please, write task.")
      return
    }
    setSavedTask(oldValue => {
      return [...oldValue, inputText];
    });
  }

  function deleteTask(id) {
    setSavedTask(oldValue => {
      return oldValue.filter((item, index) => index !== id);
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <InputArea onAdd={addTask} />
      <div>
        <ul>
          {savedTask.map((eachTask, index) => 
            <Task 
              remove={deleteTask} 
              id={index} 
              key={index} 
              content={eachTask}/>)
          }
        </ul>
      </div>
    </div>
  );
}

export default App;
