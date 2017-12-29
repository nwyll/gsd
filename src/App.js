import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';

const WORK = 1;
const BREAK5 = 2;
const BREAK30 = 3;

const NOT_STARTED = 1;
const STARTED = 2;
const COMPLETE = 3;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: NOT_STARTED,
      sessionType: null,
      workCounter: 0,
      tasks: ["Pomodoro Project", "Indecision App", "Resume"],
    }

    this.getTimer = this.getTimer.bind(this);
    this.handleStartWorkSession = this.handleStartWorkSession.bind(this);
    this.handleTakeBreak = this.handleTakeBreak.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
  }

  getTimer(type) {
    switch(type) {
      case WORK:
            return <Timer
              minutes={25}
              completionMessage={"Look at you being all productive!"}
            />;
      case BREAK5:
            return <Timer
              minutes={5}
              completionMessage={"Keep it going!"}
            />;
      case BREAK30:
            return <Timer
              minutes={30}
              completionMessage={"Time to GSD!"}
            />;
      default:
          return <p>Error</p>;
    }
  }

  handleStartWorkSession() {
    // set status to started and sessionType to work
    this.setState(() => {
      return {
        status: STARTED,
        sessionType: WORK
      }
    });
  }

  handleTakeBreak() {
    // set status to started and sessionType to take5
    this.setState(() => {
      return {
        status: STARTED,
        sessionType: BREAK5
      }
    });
  }

  timerFinished(){
    //set status to COMPLETE
    //show buttons again
    //if work sesion completed => allow take break button;  
  }

  handleAddTask() {
    alert('handleAddTask');
  }

  handleClearList() {
    alert('handleCLearList');
  }

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
              </div>
              <div className="col-sm-7 col-right">  {/* Timer Section */}
                {/* buttons disapear when timer is going */}
                {
                  this.state.status !== STARTED &&
                  (
                    <div>
                      <button className="btn btn-primary" onClick={this.handleStartWorkSession}>
                        Start Work Session
                      </button>
                      <button className="btn btn-default"
                        onClick={this.handleTakeBreak}
                        disabled={this.state.status !== COMPLETE} >
                        Take A Break
                      </button>
                    </div>
                  )
                }
                {/* Timer apears when click work-session or break buttons */}
                { this.state.status === STARTED && this.getTimer(this.state.sessionType)}
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
        props.tasks.map((task) => <TaskItem key={task} taskText={task} />)
      }
      <button onClick={props.handleClearList} className="btn btn-default">
        Clear Task List
      </button>
    </div>
  );
};

const TaskItem = (props) => <p>{props.taskText}</p>;


export default App;
