import React, { useState } from "react";

const Todos = () => {
    const initialTodo = ["Todo 1", "Todo 2", "Todo 3"];
    const [todos, setTodos] = useState(initialTodo);

    const handleCheckboxChange = (index) => {
        setTodos(todos.filter((_, idx) => idx !== index));
    };

    return (
        <div className="flex flex-col p-10">
            <div className='flex justify-left'>
                <h2 className='text-2xl font-bold'>Todos</h2>
            </div>
            <ul className='flex flex-col'>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input 
                            type="checkbox"
                            onChange={() => handleCheckboxChange(index)}
                        />
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos;