import React, { useState } from 'react';
import './App.css';

function App() {
  const [newItem, writeNewItem] = useState("")
  const [items, setNewItem] = useState([]) 

  function add() {
    setNewItem(currentItems => {
      return[
        ...currentItems,
        {id: crypto.randomUUID(), title: newItem}
      ]
    })

    writeNewItem("")
  }

  return (
    <>
      <h1>Type here</h1>
      <input
        className='bg-slate-300'
        value={newItem}
        type='text'
        onChange={e => writeNewItem(e.target.value)}
      />
      <button
        className='px-6 py-4 bg-orange-300 ml-4'
        onClick={() => add()}
      >
        add
      </button>
      {items.length === 0 && 'No items'}
      {items.map(item => {
        console.log('items :>> ', items);
        console.log('item :>> ', item);
        return(
          <p key={item.id}>{item.title}</p>
        )
      })}
    </>
  );
}

export default App;
