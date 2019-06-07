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
      todos: [
        {
          task: "Be a boss",
          id: Date.now(),
          completed: false
        },
        {
          task: "Play outside",
          id: Date.now() + 1,
          completed: false
        }
      ],
      todo:
        {
          task: "",
          id: Date.now(),
          completed: false
        }
    }
  }

  addTodo = event => {
    event.preventDefault();
    let todos = this.state.todos;
    todos.push(this.state.todo);
    // console.log("todos", todos)
    this.setState({ 
      todos: todos, 
      todo: {...this.state.todo, 
        task: "" }
      });
  };


  changeTodo = event => {
    // console.log("this.state.todo", this.state.todo);
    // console.log("event.target", event.target);
    // console.log("event.target.name", event.target.name);
    // console.log("event.target.value", event.target.value);
    this.setState({
      todo: {...this.state.todo, 
            task: event.target.value }
    });
  };


  // toggleComplete = id => {
  //   let todos = this.state.todos;
  //   todos = todos.map( todo => {
  //     if (todo.id === id) {
  //       todo.completed = !todo.completed;
  //       return todo;
  //     } else {
  //       return todo;
  //     }
  //   })
  // }

  // clearTodos = event => {
  //   event.preventDefault();
  //   let todos = this.state.todos;
  //   todos = todos.filter(todo => !todo.completed);
  //   this.setState({ todos });
  // };

  render() {
    return (
      <div>
        <TodoList 
          toggleComplete={this.toggleComplete}
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
