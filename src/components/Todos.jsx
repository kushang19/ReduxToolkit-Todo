import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {removeTodo} from '../features/todo/todoSlice'

const Todos = ({setEditTodo}) => {

    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const handleEdit = todo => setEditTodo(todo)

  return (
    <>
    <div>Todos</div>
    <ul style={{ listStyle: 'none', padding: '0' }} >
      {todos.map(todo => (
        <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>x</button>
            <button onClick={() => handleEdit(todo)}>edit</button>
        </li>
    ))}
    </ul>
    </>
  )
}

export default Todos
