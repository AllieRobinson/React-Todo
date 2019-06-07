import React from 'react';


const TodoForm = props => {
    return (
        <form>
            <input 
                type="text" 
                placeholder="Todo" 
                name="Todo" 
                className="todoinput"
                onChange={props.changeTodo} 
                value={props.todo.task}
             />
            <button onClick={props.addTodo}>Add todo</button>
            <button onClick={props.clearTodos}>Clear Completed</button>
        </form>
    );
};

export default TodoForm;