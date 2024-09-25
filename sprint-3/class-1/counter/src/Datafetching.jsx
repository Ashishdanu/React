import React from 'react'
import { useEffect , useState } from 'react'

const Datafetching = () => {
    const [data, setData] = useState([])

useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/posts').then((res)=> {
      return res.json()
    }).then((json)=> {
        setData(json)
    })

},[]);


  return (
    <div>
        <h1>Data Fetching</h1>
        {
            data.map((item, index) => {
                return <div key={index}>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    </div>
                    })

        }
      
    </div>
  )
}

export default Datafetching
