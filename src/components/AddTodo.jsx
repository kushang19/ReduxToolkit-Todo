import React,{useState,useEffect} from 'react';
import { useDispatch} from 'react-redux';
import {addTodo,updateTodo} from '../features/todo/todoSlice'

const AddTodo = ({ editTodo, clearEdit }) => {
    
    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        if (editTodo) {
            setInput(editTodo.text);
        }
    }, [editTodo]);

    const addTodoHandler = (e) =>{
        e.preventDefault();
        if (editTodo && input.trim()) {
            dispatch(updateTodo({
                id: editTodo.id,
                text: input
            }));
            clearEdit();
        }else if(input.trim()) {
            dispatch(addTodo(input));
        }
        setInput('');
    }

  return (
        <form onSubmit={addTodoHandler}> 
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Enter Your Todo Below :</label>
                <input type="text" className="form-control" id="input" placeholder="Enter New Text" 
                onChange={(e) => setInput(e.target.value)} value={input} name="input"/>
                <button type="submit" className="btn btn-primary my-2">
                {editTodo ? "Update Todo" : "Add Todo"}
                </button>
            </div>
        </form>
  )
}

export default AddTodo
