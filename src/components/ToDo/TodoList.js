import React from 'react';
import TodoItem from "./TodoItem";

import './ToDo.css'
import {useSelector} from "react-redux";

const TodoList = () => {
    const todos = useSelector(state => state.todos.todos)
    return (
        <div>
            {
                todos.map(todo =>
                        <TodoItem
                            key = {todo.id}
                            {...todo}
                            />
                        )

            }
        </div>
    );
};

export default TodoList;