import { useState , useEffect } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)



  useEffect(() => {
    document.title = `You clicked ${count} times`
  },[count])

  return (
    <>
     
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    
    </>
  )
}

export default App
