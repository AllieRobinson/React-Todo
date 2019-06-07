import React from 'react';

const Todo = props => {
    // console.log("props in Todo", props);
    // console.log("props.todo", props.todo);
    // console.log("props.todo.task", props.todo.task);
    return (
        <div key={props.todo.id}>
            {props.todo.task}    
        </div>
    );
};

export default Todo;