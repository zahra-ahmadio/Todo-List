import React, {useState} from 'react';
import './App.css';
 //importing componant
import Form from "./componant/Form";
import ToDoList from "./componant/ToDoList";


function App (){

const [inputText, setInputText]=useState("");
const [todos, setTodos]=useState([]);

    return (
        <div className="app">
            <header>
                <h1>zahra's  todo list  </h1>

            </header>
        <Form inputext={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} />
             <ToDoList />
       </div>
    );
}
export default App;