import React, {useState} from 'react';
import Title from './title.js';
import TodoInput from './todoinput.js';
import Todos from './todos.js';



const App = () => {
  const [todos, setTodos] = useState([]);

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