import React, { useState } from 'react';

function TodoInput() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log(inputValue);
            setInputValue('');
        }
    };

    return (
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Type a new todo here"
        />
    );
}

export default TodoInput;