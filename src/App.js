import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos: [],
      todo:
        {
          task: "",
          id: Math.random(),
          completed: false
        }
    }
  }

  addTodo = event => {
    event.preventDefault();
    let todos = this.state.todos;
    todos.push(this.state.todo);
    this.setState({ 
      todos: todos, 
      todo: {...this.state.todo, 
            task: "" }
      });
  };

  changeTodo = event => {
    this.setState({
      todo: {...this.state.todo, 
            task: event.target.value }
    });
  };

  toggleCompleted = id => {
    let todos = this.state.todos;
    const newTodos = todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
        console.log(todo.completed)
        return todo;
      } 
    }); 
    this.setState({
      todos: newTodos
      });
  }

  clearTodos = event => {
    event.preventDefault();
    let todos = this.state.todos;
    const newTodos = todos.filter(todo => !todo.completed);
    this.setState({
      todos: newTodos
    });
  }

  render() {
    return (
      <div>
        <TodoList 
          toggleCompleted={this.toggleCompleted}
          todos={this.state.todos} />
        <TodoForm
          todo={this.state.todo}
          changeTodo={this.changeTodo}
          addTodo={this.addTodo}
          clearTodos={this.clearTodos} />
      </div>
    );
  }
}

export default App;
