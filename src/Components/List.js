import React, { useState  } from 'react'
import './TodoList.css'



    
  


  function List() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');
    
 

   

  const handlekeyDown=(event)=>{
    if(event.key==='Enter')
    {
      handleAddTodo();
    }
    if(event.key==='Delete')
    {
      handleDeleteTodo();
    }
  }
    function handleAddTodo() {
      if(inputValue.length===0)
      alert("Task cannot be Empty!")
      else{

        setTodos([...todos, inputValue]);
        setInputValue('');
        localStorage.setItem('todos', JSON.stringify(todos));
      }
    }
  
    function handleDeleteTodo(index) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  


  return (
        
        <>  
            

          <h1 className="italic-heading">{todos.length} Reminders .....</h1>            

            <div className="todo-list-container">
                <div  className='add-todo-container'>
                  <span className="input-group-text" id="addon-wrapping">Task :</span>
                  <input type="text" className="form-control" value={inputValue} onKeyDown={handlekeyDown} onChange={e=>setInputValue(e.target.value)} aria-describedby="addon-wrapping"/>
              
                  <button className="btn btn-primary" id='myButton' onClick={handleAddTodo}>Add</button>
                </div>
                  <ul className='todo-list' >
                    {todos.map((todo, index) => (
                      <li key={index} className='todo-item'>{index} ) &nbsp; {todo}
                        <button className='delete-todo-button' onKeyDown={handlekeyDown} onClick={() => handleDeleteTodo(index)}>Done</button>
                      </li>
                    ))}
                  </ul>        
                  
                
            </div>
            
            
        </>
  )
}
export default List;
