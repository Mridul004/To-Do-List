import React, { useState } from 'react'
import './TodoList.css'
  

  function List() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
  
    function handleAddTodo() {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  
    function handleDeleteTodo(index) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  
    

  return (
        
        <>
            <div className="todo-list-container">
            <div class="input-group flex-nowrap" className='add-todo-container'>
              <span class="input-group-text" id="addon-wrapping">--></span>
              <input type="text" className='add-todo-input' class="form-control" value={inputValue} onChange={e=>setInputValue(e.target.value)} aria-describedby="addon-wrapping"/>
          
              <button class="btn btn-primary" onClick={handleAddTodo}>Add</button>
            </div>
              <ul class='mx-3' className='todo-list' >
                {todos.map((todo, index) => (
                  <li class="my-1" key={index} className='todo-item'>
                    {todo}
                    <button class="btn btn-danger mx-3" className='delete-todo-button' onClick={() => handleDeleteTodo(index)}>x</button>
                  </li>
                ))}
              </ul>        
                
                
            </div>
        </>
  )
}
export default List;
