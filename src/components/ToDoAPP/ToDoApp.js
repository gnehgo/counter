import React, {useState} from 'react';
import {addTodo} from '../../store/todoSlice';
import './ToDoApp/ToDo.css'
import TodoList from "../ToDoApp/TodoList";
import InputField from "../ToDoApp/InputField";
import {useDispatch} from "react-redux";
const ToDoApp = () => {
    const [text,setText] = useState('')
    const dispatch = useDispatch()
    const addTask = () =>{
        dispatch(addTodo({text}))
        setText('')
    }
    return (
          <div className="pageToDo">
              <div className={'ToDoContainer'}>
                  <h1 className={'ToDoLogo'}>ToDo App</h1>
                    <InputField
                        text={text}
                        handleInput={setText}
                        handeSubmit={addTask}
                    />
               <TodoList
               />
              </div>
          </div>
    );



};

export default ToDoApp;