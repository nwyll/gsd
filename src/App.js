import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionType: "working",
      workCounter: 0,
      tasks: ["Pomodoro Project", "Indecision App", "Resume"],
    }

    this.getTimer = this.getTimer.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
  }

  getTimer(type) {
        switch(type) {
      case "working":
            return <Timer
              minutes={25}
              completionMessage={"Look at you being all productive!"}
            />;
      case "take5":
            return <Timer
              minutes={5}
              completionMessage={"Keep it going!"}
            />;
      case "take30":
            return <Timer
              minutes={30}
              completionMessage={"Time to GSD!"}
            />;
      default:
          return <p>Error</p>;
    }
  }

  handleAddTask() {
    alert('handleAddTask');
  }

  handleClearList() {
    alert('handleCLearList');
  }

  // isFinished(){
  //   //if work sesion completed => getTimer(take5);
  // }

  render() {
    const title = "Welcome to GSD";
    const subtitle = "Ready to get sh*t done?";

    return (
      <div className="App panel panel-default center-block">
        <div className="panel-body">
          <div className="container-fluid">
            <Header title={title} subtitle={subtitle}/>
            <div className="row">
              <div className="col-sm-5 col-left">
                <AddTask
                  handleAddTask={this.handleAddTask}
                />
                <TaskList
                  tasks={this.state.tasks}
                  handleClearList={this.handleClearList}
                />
                  {/* <Task />  subcomponent in TaskList*/}
                {/* WorkSession Button */}
                {/* Break Button - only shows after a sesion is completed */}

              </div>
              <div className="col-sm-7 col-right">
                {/* <Timer /> */}
                {this.getTimer(this.state.sessionType)}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div className="row">
      <header className="App-header">
        <h1 className="App-title">{props.title}</h1>
        {props.subtitle && <h2 className="App-subtitle">{props.subtitle}</h2>}
      </header>
    </div>
  );
};

class AddTask extends Component {
  handleAddTask(e) {
    // prevent screen refresh
    e.preventDefault();

    const newTask = e.target.elements.task.value.trim();

    if(newTask) {
      alert(newTask);
    }

    // clear text from form input
    e.target.elements.task.value = '';
  }

  render () {
    return (
      <div>
        <h2>Task History</h2>
        <form onSubmit={this.handleAddTask}>
          <input type="text" name="task" />
          <button>Add Task</button>
        </form>

      </div>
    );
  }
}

const TaskList = (props) => {
  return (
    <div className="task-list">
      {
        props.tasks.map((task) => <TaskItem key={task} taskText={task} />)
      }
      <button onClick={props.handleClearList}>Clear Task List</button>
    </div>
  );
};

const TaskItem = (props) => <p>{props.taskText}</p>;


export default App;
