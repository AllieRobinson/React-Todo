import React from 'react';

const Todo = props => {
    console.log("props in Todo", props);
    return (
        <div>
            {props.task}    
        </div>
    );
};

export default Todo;