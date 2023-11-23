import React, {useState, useEffect} from 'react';
import Title from './title.js';
import TodoInput from './todoinput.js';
import Todos from './todos.js';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleCheckboxChange = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  return (
    <div>
      <Title />
      <TodoInput addTodo={addTodo} />
      <Todos todos={todos} handleCheckboxChange={handleCheckboxChange} />
    </div>
  )
}

export default App;