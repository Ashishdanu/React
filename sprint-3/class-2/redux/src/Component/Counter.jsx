import { useSelector , useDispatch } from 'react-redux'
import increase from '../Redux/actions/increase'
import decrease from '../Redux/actions/decrease'

const Counter = () => {
  const count = useSelector((state) => state.counter);

    console.log(count)
    const dispatch = useDispatch()
  return (
    <>
        <div>
      <h1>counter component : {count}</h1>
      <span>

      </span>
    </div>
<button  onClick={()=> dispatch(decrease())}>decrease</button>
    <button onClick={()=> dispatch(increase())}>increaese</button>
    </>

  )
}

export default Counter ;
