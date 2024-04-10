import './App.css'
import { store } from './store/store';
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from './store/counterSlice';
import React, { useEffect } from 'react';

function App() {

  const count = useSelector((state) => {
    console.log(state);
    return state.counter.value
  })
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(store);
  }, [store])

  return (
    <div className='gap-4'>
      <div className='bg-amber-50 p-4 mb-4 rounded-md text-black text-xl flex'>
        <p>Counter : </p>
        <span className='ml-auto mr-auto'>{count}</span>
      </div>

      <div className='flex'></div>
      <button
        className='text-blue-300 outline-none bg-slate-100 mr-2 text-xl'
        onClick={() => dispatch(increment())}
      >➕</button>
      <button
        className='text-blue-300 outline-none bg-slate-100 text-xl'
        onClick={() => dispatch(decrement())}
      >➖</button>
    </div>
  )
}

export default App
