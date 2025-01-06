import React, { useState } from 'react'

export const EditTaskForm = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("")
  }

  return (
    <form className='TaskForm' onSubmit={handleSubmit}>
      <input type='text' className='formInput' value={value} placeholder='Update your task here!' onChange={(e) => setValue(e.target.value)}/>
      <button type='submit' className='taskbtn'>Edit Task</button>
      
    </form>
  )
}
