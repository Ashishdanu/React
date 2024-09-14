import { useState } from 'react'
import{ Todo } from './todo' ;

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Todo App</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
       
      </div>

      <Todo />
      
    </>
  )
}

export default App
