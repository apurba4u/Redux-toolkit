import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

export const SearchBar = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  function submitHandler(elem) {
    elem.preventDefault()
    dispatch(setQuery(text))

    setText('')
  }
  return (
    <div>
      <form onSubmit={(elem) => {
        submitHandler(elem)
      }}
       className='flex bg-[#0F2854] p-10 gap-6'>
        <input value={text} 
        onChange={(elem) => {
          setText(elem.target.value)
        }}
        className='w-full border-2 p-3 rounded outline' 
        type="text"
        required
        placeholder='search anything....'/>
        <button
        className='border-2 p-3 rounded outline cursor-pointer active:scale-95 active:bg-gray-950'
        >Search</button>
      </form>
    </div>
  )
}
