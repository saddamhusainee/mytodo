import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'

function TodoInput() {
    const {phone, name} = useContext(AppContext)

  return (
    <div className='flex justify-center'>
        <form className='flex justify-center mt-10 p-3 rounded-lg'>
            <input type="text" placeholder='Add Todo' className='duration-150 px-1.5 w-full rounded-l-lg outline-none border bg-white/20 border-black/10' />
            <button className='bg-green-600 rounded-r-lg px-3 py-1'>Add{name}</button>
        </form>
        <div >
            
        </div>
    </div>
  )
}

export default TodoInput