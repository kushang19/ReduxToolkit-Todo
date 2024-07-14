import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../features/todo/todoSlice'

const AddTodo = () => {
    
    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    const addTodoHandler = (e) =>{
        console.log("hi");
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('');
    }

  return (
        <form onSubmit={addTodoHandler}> 
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Todo Below :</label>
                <input type="text" className="form-control" id="input" placeholder="Enter New Text" 
                onChange={(e) => setInput(e.target.value)} value={input} name="input"/>
                <button type="submit" className="btn btn-primary my-2">Add todo</button>
            </div>
        </form>
  )
}

export default AddTodo
