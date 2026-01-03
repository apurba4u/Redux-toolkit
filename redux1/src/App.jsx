import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByamount } from './redux/features/counterslice'

export const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.counter.value)
  const [num, setNum] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => {
        dispatch(increment())
      }}>Increment</button>
      <button onClick={() => {
        dispatch(decrement())
      }}>Decrement</button>
      <input type="text" value={num} onChange={(elem) => {
        setNum(elem.target.value)
      }}/>
      <button onClick={() => {
        dispatch(incrementByamount(Number(num)))
      }}>incrementByamount</button>
    </div>
  )
}

export default App