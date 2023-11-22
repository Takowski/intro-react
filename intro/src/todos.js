import React, { useState } from "react";
 const Todos = () => {
    const initialTodo = ["Todo 1", "Todo 2", "Todo 3"];
    const [todo, setTodo] = useState(initialTodo);
    const [isCompleted, setIsCompleted] = useState(Array(initialTodo.length).fill(false));
    const checkHandler = (index) => {
        setIsCompleted(isCompleted.map((item, idx) => idx === index ? !item : item));
      }
    
    return (
        <div className="flex flex-col p-10">
            <div className='flex justify-left'>
                <h2
                    className='text-2xl font-bold'
                >Todos</h2>
            </div>
            <ul className='flex flex-col'>
                {todo.map((todo, index) => (
                    <li key={index}>
                        <input 
                        type="checkbox"
                        checked={isCompleted[index]}
                        onChange={() => checkHandler(index)}
                          />
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Todos;