import React, { useState } from "react";
const Todos = () => {
    const initialTodo = ["Todo 1", "Todo 2", "Todo 3"];
    const [todo, setTodo] = useState(initialTodo);
    return (
        <div className="flex flex-col p-10">
            <div className='flex justify-left'>
                <h2
                    className='text-2xl font-bold'
                >Todos</h2>
            </div>
            <table className='flex flex-col'>
                <ul>
                    {todo.map((todo) => (
                        <li>
                            <input type="checkbox" />
                            {todo}</li>
                    ))}
                </ul>
            </table>
        </div>
    )
}
export default Todos;