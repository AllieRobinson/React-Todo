import React from 'react';


const TodoForm = props => {
    console.log("props in TodoForm", props);
    return (
        <form>
            <input 
                type="text" 
                placeholder="Todo" 
                name="Todo" 
                className="todoinput"
                onChange="text" 
             />
            <button>Add todo</button>
            <button>Clear Completed</button>
        </form>
    );
};

export default TodoForm;