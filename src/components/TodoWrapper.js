import React, { useState, useEffect } from 'react';
import { TaskForm } from './Form';
import { v4 as uuidv4 } from 'uuid';
import { EditTaskForm } from './EditForm';
import { List } from './list';


export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  useEffect(() => {
    console.log(todos); // Log todos whenever the state changes
  }, [todos]);

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };

  const editTask = (task, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));
  };

  return (
    <div className='TodoWrapper'>
      <h3>Junk To Do</h3>
      <TaskForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        todo.isEditing ? (<EditTaskForm editTodo={editTask} task={todo} />) :(
        <List task={todo} key={index} toggleComplete={toggleComplete} deleteTodo ={deleteTodo} editTodo={editTodo}/>)
      ))}
  
    </div>
  )
}
