import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const data = [
  {
    task: "Glare at code",
    id: 123,
    complete: false
  },
  {
    task: "Delete code",
    id: 1234,
    complete: false
  },
  {
    task: "Start over",
    id: 12345,
    complete: false
  }
]

class App extends React.Component {
  state = {
    todos: data
  }

toggleComplete = todoId => {
  console.log("toggleComplete: ", todoId);
  this.setState({
    todos: this.state.todos.map(todo => {
      if(todo.id === todoId) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
  })
}

clearCompleted = () => {
  console.log("clearCompleted")
  this.setState({
    todos: this.state.todos.filter(todo => {
      return !todo.complete;
    })
  })
}

addTodo = todoName => {
  console.log("add item: ", todoName);
  this.setState({
    todos: [
      ...this.state.todos,
      {
        task: todoName,
        id: Math.random(),
        complete: false
      }
    ]
  })
}

render() {
  console.log("rendering...")
  return(
    <div className="App">
      <div className="header">
        <h1>Todo List:</h1>
        <TodoForm 
          addTodo={this.addTodo} />
      </div>
      <TodoList
        todos={this.state.todos}
        toggleComplete={this.toggleComplete}
        clearCompleted={this.clearCompleted}
        />
    </div>
  )
}

}

export default App;