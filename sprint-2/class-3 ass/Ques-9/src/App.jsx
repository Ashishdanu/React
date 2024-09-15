import { useState } from 'react'
import './App.css'
// import  ProductGallery from './products' 
import Form from './Ques7' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <ProductGallery /> */}
     <Form />
    </>
  )
}

export default App
