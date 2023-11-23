import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [input, setinput] = useState('');

  const handleAddTodo = () => {
    addTodo(input);
    setinput('');
  };

  

return (
  <div className='flex flex-col justify-left p-10 border-b-2'>
    <input
      value={input}
      onChange={(e) => setinput(e.target.value)}
      placeholder='Type a new todo here'
      className="block rounded-md border-0
       py-1.5 pl-7 pr-20 text-gray-900 ring-1
        ring-inset ring-gray-300
         placeholder:text-gray-400 
         focus:ring-2 focus:ring-inset
          focus:ring-indigo-600 sm:text-sm sm:leading-6
          w-96"
    />
    <button
      onClick={handleAddTodo}
      className='bg-blue-500
       hover:bg-blue-700
        text-white font-bold
         py-2 px-4 rounded w-32 mt-4'>
      Add Todo
    </button>
  </div>
)
    }

export default TodoInput;