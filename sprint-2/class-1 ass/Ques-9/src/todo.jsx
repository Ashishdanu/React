import { useState } from "react";

export function Todo() {
  const [todos, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [check, setCheck] = useState(false);
  

  const submit = (e) => {
    e.preventDefault();
    const newTodoItem = {
      id: todos.length + 1,
      text: newTodo,
      date: date,
      time: time,
      check: check,
    };
    setTodo([...todos, newTodoItem]);
    setNewTodo("");
    setDate("");
    setTime("");
    setCheck(false);
  };

  const deletebtn = () => {
    setTodo(todos.filter((todo) => todo.id !== todos.length));
  };



  const editbtn = (id) => {
    const edittask = prompt("edityour task name ");
    const editdate = prompt("edit your date ");
    const edittime = prompt('Edit your time:');
    const checkStatus = prompt('Is it completed? (yes/no)') === 'yes';
        // Update the todos state
        setTodo(
            todos.map((task) =>
              task.id === id
                ? { ...task, text: edittask, date: editdate, time: edittime, check: checkStatus }
                : task
            )
          );
  };

  return (
    <>
      <h1> Your Tasks</h1>

      <form onSubmit={submit}>
        <input
          type="text"
          value={newTodo}
          placeholder="enter task"
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <label>
          completed
          <input
            type="checkbox"
            checked={check}
            onChange={(e) => setCheck(!check)}
          />
        </label>

        <button type="submit">Add Tasks</button>
      </form>

      <div id="display">
        {todos.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              <p>{todo.text}</p>
              <p>{todo.date}</p>
              <p>{todo.time}</p>
              <p>{todo.check ? "completed" : "Pending"}</p>
              <button onClick={() => editbtn(todo.id)}>Edit Task</button>
              <button onClick={() => deletebtn(todo.id)}>Delete Task</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
