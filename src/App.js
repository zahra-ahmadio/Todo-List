import React, {useState} from 'react';
import data from './data.json';
import Header from './Header';
import ToDoList from "./ToDoList";
import './App.css';

function App (){
    const [toDoList, setToDoList] = useState(data);

  return(
      <div className="app">
          <Header/>
          <ToDoList toDoList={toDoList}/>
      </div>
  );
}
export default App;