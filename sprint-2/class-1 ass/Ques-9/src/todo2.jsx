import { useState } from "react";

export function Todo() {
  const [todos, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [check, setCheck] = useState(false);

  const [editingTodo, setEditingTodo] = useState(null);
  const [editedText, setEditedText] = useState("");
  const [editedDate, setEditedDate] = useState("");
  const [editedTime, setEditedTime] = useState("");
  const [editedCheck, setEditedCheck] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (editingTodo) {
      // Save changes to the existing todo
      setTodo(
        todos.map((todo) =>
          todo.id === editingTodo.id
            ? { ...todo, text: editedText, date: editedDate, time: editedTime, check: editedCheck }
            : todo
        )
      );
      // Reset editing state
      setEditingTodo(null);
    } else {
      // Add new todo
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        date: date,
        time: time,
        check: check,
      };
      setTodo([...todos, newTodoItem]);
    }

    // Clear form fields
    setNewTodo("");
    setDate("");
    setTime("");
    setCheck(false);
    setEditedText("");
    setEditedDate("");
    setEditedTime("");
    setEditedCheck(false);
  };

  const deletebtn = (id) => {
    setTodo(todos.filter((todo) => todo.id !== id));
  };

  const startEdit = (todo) => {
    setEditingTodo(todo);
    setEditedText(todo.text);
    setEditedDate(todo.date);
    setEditedTime(todo.time);
    setEditedCheck(todo.check);
  };

  return (
    <>
      <h1>Your Tasks</h1>

      <form onSubmit={submit}>
        <input
          type="text"
          value={editingTodo ? editedText : newTodo}
          placeholder="Enter task"
          onChange={(e) => {
            if (editingTodo) {
              setEditedText(e.target.value);
            } else {
              setNewTodo(e.target.value);
            }
          }}
        />

        <input
          type="date"
          value={editingTodo ? editedDate : date}
          onChange={(e) => {
            if (editingTodo) {
              setEditedDate(e.target.value);
            } else {
              setDate(e.target.value);
            }
          }}
        />
        <input
          type="time"
          value={editingTodo ? editedTime : time}
          onChange={(e) => {
            if (editingTodo) {
              setEditedTime(e.target.value);
            } else {
              setTime(e.target.value);
            }
          }}
        />
        <label>
          Completed
          <input
            type="checkbox"
            checked={editingTodo ? editedCheck : check}
            onChange={() => {
              if (editingTodo) {
                setEditedCheck(!editedCheck);
              } else {
                setCheck(!check);
              }
            }}
          />
        </label>

        <button type="submit">{editingTodo ? 'Save Changes' : 'Add Task'}</button>
      </form>

      <div id="display">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <p>{todo.text}</p>
            <p>{todo.date}</p>
            <p>{todo.time}</p>
            <p>{todo.check ? 'Completed' : 'Pending'}</p>
            <button onClick={() => startEdit(todo)}>Edit Task</button>
            <button onClick={() => deletebtn(todo.id)}>Delete Task</button>
          </div>
        ))}
      </div>
    </>
  );
}
