import React from 'react';
import './ToDo.css'
import {useDispatch,} from "react-redux";
import {removeTodo,toggleTodoComplete} from '../../store/todoSlice';

const TodoItem = ({id,text,completed}) => {
    const dispatch = useDispatch()
    return (
        <li className={'taskWrapper'}>
            <input
                className={'checkbox'}
                type={"checkbox"}
                checked={completed}
                onChange={() => dispatch(toggleTodoComplete({id}))}
            />
            <span className={'taskTittle'} onClick={() => dispatch(toggleTodoComplete({id}))}
            >{text}</span>
            <span className={'close'} onClick={() => dispatch(removeTodo({id}))}>&times;</span>
        </li>
    );
};

export default TodoItem;