import React from 'react';
// import * as Console from "console";

const Form = ({setInputText,todos,setTodos,inputText}) => {
    // here i can write javascript code and function
const inputTextHandler = (e)=>{
    // console.log(e.target.value);
    setInputText(e.target.value);
}
const submitToDoHandler = (e)=>{

    e.preventDefault();
  setTodos([
      ...todos,{text: inputText, completed: false, id: Math.random() *1000}
  ]);
  setInputText('');
};

    return(
<form>
    <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
    <button onClick={submitToDoHandler} className="todo-button" type="submit">
        <i className="fas fa-square"></i>
    </button>
        <div className="select">
            <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>
        </div>

</form>
    );

}
export default Form;