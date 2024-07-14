import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  const [editTodo, setEditTodo] = useState(null);

  const clearEdit = () => {
      setEditTodo(null);
  };

  return (
    <>
      <h1>Powered by Redux Toolkit</h1>
      <AddTodo editTodo={editTodo} clearEdit={clearEdit} />
      <Todos setEditTodo={setEditTodo}  />
    </>
  )
}

export default App
