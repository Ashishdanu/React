import React from 'react'
import {useSelector , useDispatch } from 'react-redux'


const Counter = () => {
    const count = useSelector((state)=> state)
    const dispatch = useDispatch()



  return (
    <div>
        <hr />
        <h1>
            Count : {count}
          
        </h1>
        <hr />

        <button onClick={()=> dispatch({
                type: 'INCREMENT',
                payload: 1
            })}> inrease</button>
            <button   onClick={()=> dispatch({
                type: 'DECREMENT',
                payload: -1
            })}>decrease</button>
            <hr />
    </div>
  )
}

export default Counter
