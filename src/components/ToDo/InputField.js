import React from 'react';
import './ToDo.css'

const InputField = ({text, handleInput, handeSubmit}) => {
     const handleKeyUp = (event) => {
        if (event.keyCode === 13) { // Enter
           handeSubmit()
        }
    };
    return (
        <div className={'todoWriter'}>
            <input
                placeholder="Write ToDo"
                className={'ToDoInput'}
                value={text}
                onKeyUp={handleKeyUp}
                onChange={event => handleInput(event.target.value)}
            />
            <button  className={'ToDoBtn'} onClick={handeSubmit}>Add</button>
        </div>
    );
};

export default InputField;