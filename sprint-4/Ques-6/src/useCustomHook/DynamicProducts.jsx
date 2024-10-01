import React from 'react'
import useFetch from '../customHook/UseFetch'

const DynamicProducts = () => {
    const [data , loading , error] = useFetch('https://fakestoreapi.com/products')


  return (
    <div>
        {loading ? <p>Loading...</p> : null}
        {error ? <p>Error...</p> : null}
        <div style={
        {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',

        }
        }>
        {
            data?.map((item) => {
                return (
                    <div key={item.id} style={{width:'350px' , height:'400px'}}>
                        <img src={
                            item.image
                        } alt={item.image}  style={ {display:'block' ,margin:'auto' ,width:'150px', height:'150px'}}/>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>Price: {item.price}</p>

                        </div>

                    
                )
            } )
        }
        </div>
       
      
    </div>
  )
}

export default DynamicProducts ;
