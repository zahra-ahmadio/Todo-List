import React, {useState} from 'react';
import './App.css';
 //importing componant
import Form from "./componant/Form";
import ToDoList from "./componant/ToDoList";


function App (){

const [inputText, setInputText]=useState("");
const [todos, setTodos]=useState([]);
const [status, setStatus]=useState('all');
const [filteredTodos, setFilteredTodos]=useState([]);


    return (
        <div className="app">
            <header>
                <h1>zahra's  todo list  </h1>

            </header>
        <Form
            inputText={inputText}
            todos={todos} setTodos={setTodos}
            setInputText={setInputText}
            setStatus={setStatus}
        />
             <ToDoList setTodos={setTodos} todos={todos}/>
       </div>
    );
}
export default App;