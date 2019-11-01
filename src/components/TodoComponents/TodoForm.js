import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: ""
        }
    }

    handleChanges = e => {
        this.setState({
            todoName: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.todoName != "") {
            this.props.addItem(this.state.todoName)
            this.setState({
                itemName: ""
            })
        }
    }

    render() {
        console.log("rendering form")
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    onChange={this.handleChanges}
                    type="text"
                    name="task"
                    value={this.state.todoName} />
            </form>
        )
    }
}