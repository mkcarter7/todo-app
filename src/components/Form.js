import React, { useState } from 'react'

export const TaskForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value);

    setValue("")
  }

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input type='text' className='formInput' value={value} placeholder='Add To Do' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='taskbtn'>Enter</button>
      
    </form>
  )
}
