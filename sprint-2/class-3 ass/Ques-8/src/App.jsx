import { useState, useContext } from "react";
import { createContext } from "react";
import "./App.css";
const TodoContext = createContext();
function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <TodoContext.Provider value={{ todos, newTodo ,setTodos , setNewTodo}}>
        <Head />
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;

const Head = () => {
  return (
    <>
      <h1>My Todo</h1>
      <strong>Jalwa hai</strong>
    </>
  );
};

const TodoForm = () => {
  const { newTodo, todos ,setNewTodo ,setTodos} = useContext(TodoContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
    const  newTodoitem = {
        id: todos.length +1,
        text: newTodo,

      }
      setTodos([...todos, newTodoitem]);
      setNewTodo("");
      }
   
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
         
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};
const TodoList = () => {
  const { todos , setTodos } = useContext(TodoContext);

  return (
    <>
      <div className="ListOfTodos">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <strong>Have A Nice Day</strong>
            <br />
            <small>Your Task is</small>
            <p>{todo.text}</p>
            <button className="delete-btn" 
            onClick={() => {
              const updatedTodos = todos.filter((item) => item.id !== todo.id);
              setTodos(updatedTodos);
              }}
            >Delete</button>

          </div>
        ))}
      </div>
    </>
  );
};
