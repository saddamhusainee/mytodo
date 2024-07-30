import React, { useState } from 'react'

function TodoSave(props) {

    const [isTodoEditable, setIsTodoEditable] =useState("")
    const items = "Doing Somthing"
  return (
    <div className=''>
        <div className='w-full rounded-2xl px-2 py-2 flex justify-between bg-slate-500'> 
                <input value={items} type="text" placeholder='Saddam' className='rounded-lg outline-none w-10/12  bg-slate-500'/>
            <div className=''>
                <button className=" inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50">
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
                <button className="ml-2 inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
                    ❌
                </button>
            </div>
        </div>
    </div>
  )
}

export default TodoSave