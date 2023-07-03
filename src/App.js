import React, { useState } from 'react';
import './App.css';
import { Todos } from './todos';
import { Menu } from './menu';

function App(){
  const [todos, setNewTodo] = useState([])

  function addToDo(title) {
    if(title === "") return

    setNewTodo(currentTodos => {
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title}
      ]
    })
  }

  console.log('App component rerendered')

  return (
    <div className='m-4'>
      <p className='text-4xl'>Todos</p>
      <Menu onClick={addToDo} />
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
