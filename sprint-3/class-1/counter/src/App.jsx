import { useState } from 'react'
import Counter from './counter'
import './App.css'
import Form from './form'
import NewForm from './NewForm'
import UpdatedForm from './UpdatedForm'
import UpdatedForm3 from './UpdateForm3'
import Datafetching from './Datafetching'
import DatafetchingReducer from './DatafetchingReducer'


function App() {


  return (
    <>
     {/* <Counter /> */}
     {/* <Form /> */}

     {/* <h1>New useReduce Form</h1> */}
     {/* <NewForm /> */}
     {/* <UpdatedForm3 /> */}
     {/* <Datafetching /> */}


     
     <DatafetchingReducer />
    </>
  )
}

export default App
