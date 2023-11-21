import React, {useState} from 'react';
import Title from './title.js';
import TodoInput from './todoinput.js';
import Todos from './todos.js';





const App = () => {
  return (
    <div>
      <Title />
      <TodoInput />
      <Todos/>
      
    </div>
  )
}

export default App;