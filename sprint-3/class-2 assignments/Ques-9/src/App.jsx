import { useState } from 'react'

import './App.css'
import TodoForm from './TodoComponent/TodoForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div style={{textAlign:'center'}}>
     Todo List
     <TodoForm />
     </div>
    </>
  )
}

export default App
