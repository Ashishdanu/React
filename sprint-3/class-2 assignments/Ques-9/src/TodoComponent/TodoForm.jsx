import React from "react";
import { useSelector, useDispatch } from "react-redux";
import submitTodo from "../todoRedux/Todoactions/submitTodo";


const TodoForm = () => {
  const Dispatch = useDispatch();
  const todo = useSelector((state) => state);

  const HAndleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: todo.length +1,
        text:e.target.elements.todoInput.value, // Get input value from named input
        }
        Dispatch(submitTodo(newTodo));
        e.target.reset(); // Reset the form after submission
        console.log(todo)
    console.log("Form submitted");

    
  };
  return (
    <>
      <div>
        <h2>Todo Form</h2>
      </div>

      <form onSubmit={HAndleSubmit}>
        <input type="text" placeholder="enter Task"
         name="todoInput"
         />
        <button type="submit">Add Task</button>
      </form>

      <div className="display" style={{display:"flex" , justifyContent:"space-between" , flexWrap:'wrap' ,gap:'15px' , margin:'20px auto' ,width:'78%' }} >
        {todo.map((item) => {
          return (
            <div key={item.id} style={{background:'gray' , width:'200px' , margin:'auto' }}>
              <p>{item.text}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoForm;
