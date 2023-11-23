import React, { useState } from "react";




const Todos = ({ todos, handleCheckboxChange }) => {
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

