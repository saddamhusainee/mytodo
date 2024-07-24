import React, { useState } from 'react'

function TodoSave() {

    const [isTodoEditable, setIsTodoEditable] =useState("")
  return (
    <div className='bg-slate-900'>
        
        <div className='w-full rounded-2xl px-2 py-2 flex justify-between bg-slate-500'> 
                <input type="text" placeholder='Saddam' className=''/>
            <div>
                <button
                    className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                >
                    {isTodoEditable ? "📁" : "✏️"}
                </button>
                {/* Delete Todo Button */}
                <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0">
                    ❌
                </button>
            </div>
        </div>

    </div>
  )
}

export default TodoSave