import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

export const Tabs = () => {
  const tabs = ['photos', 'videos', 'gif']
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.search.activeTab)
  return (
    <div className='flex gap-10 p-10'>
      {tabs.map((elem,idx) => {
        return(
          <button key={idx} 
          className={`${activeTab == elem ? 'bg-blue-700':'bg-gray-600'} cursor-pointer transition active:scale-95 rounded px-5 py-2`} 
          onClick={() => {
            dispatch(setActiveTabs(elem))
          }}
          >{elem}</button>
        )
      })}
    </div>
  )
}
