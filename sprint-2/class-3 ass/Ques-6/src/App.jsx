import { useState } from "react";

import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  return (
    <>
      <Head />
      <TodoForm
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
    </>
  );
}

export default App;

const Head = () => {
  return <div>My Todo</div>;
};

const TodoForm = ({ newTodo, setNewTodo, todos, setTodos }) => {



  const HandleSubmit = (e) => {
    e.preventDefault();
    const newTodoitem = {
      id: todos.length + 1,
      text: newTodo,
    };
 
    setTodos([...todos, newTodoitem]);
    console.log( "new added task" ,newTodoitem);
    setNewTodo('')
  };

  return (
    <>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button type="submit">submit todo</button>
      </form>
    </>
  );
};
