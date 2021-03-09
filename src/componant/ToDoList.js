import React from "react";
//import componant

import ToDo from "./ToDo";


const ToDoList =({todos, setTodos})=>{

  console.log(todos);
    return(
     <div className="todo-container">
         <ul  className="todo-list">
             {todos.map(todo =>(
                 <ToDo
                     setTodos={setTodos}
                       todos={todos}
                       key={todo.id}
                       todo={todo}
                       text={todo.text}  />
             ))}


         </ul>
     </div>
    );
};
export default ToDoList;