import React, { Component } from 'react';

class AddTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: undefined
    };

    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(e) {
    // prevent screen refresh
    e.preventDefault();
    const newTask = e.target.elements.task.value.trim();

    //handleAddTask above only returns a message if something went wrong,
    //otherwise it returns undefined (ie all is good, state updated)
    //if there is an error update the state here with the error message
    const error = this.props.handleAddTask(newTask);
    this.setState(() => ({ error }));

    // clear text from form input
    e.target.elements.task.value = '';
  }

  render () {
    return (
      <div>
        <h2>Task History</h2>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddTask}>
          <input type="text" name="task" />
          <button className="btn btn-default">Add Task</button>
        </form>
      </div>
    );
  }
}

const TaskList = (props) => {
  return (
    <div className="task-list">
      {
        props.tasks.slice(0).reverse().map((task) => <TaskItem key={task} taskText={task} />)
      }
      <button className="btn btn-default"
        onClick={props.handleClearList}
        disabled={!props.hasTasks}
      >
        Clear Task List
      </button>
    </div>
  );
};

const TaskItem = (props) => <p>{props.taskText}</p>;

export default AddTask;
