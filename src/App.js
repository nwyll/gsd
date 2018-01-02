import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

const WORK = 1;
const BREAKSHORT = 2;
const BREAKLONG = 3;

const NOT_STARTED = 1;
const STARTED = 2;
const COMPLETE = 3;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timerStatus: NOT_STARTED,
      sessionType: null,
      workCounter: 0,
      tasks: ["Pomodoro Project", "Indecision App", "Resume"],
    }

    this.audioElement = document.createElement('audio');
    this.audioElement.src = '/assets/Elevator-Ding-Sound.mp3';
    this.audioElement.preload = 'auto';

    this.getTimer = this.getTimer.bind(this);
    this.handleStartWorkSession = this.handleStartWorkSession.bind(this);
    this.handleBreakShort = this.handleBreakShort.bind(this);
    this.handleBreakLong = this.handleBreakLong.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleClearList = this.handleClearList.bind(this);
    this.timerFinished = this.timerFinished.bind(this);
  }

  getTimer(type) {
    switch(type) {
      case WORK:
            return <Timer
              minutes={.05}
              timerFinished={this.timerFinished}
            />;
      case BREAKSHORT:
            return <Timer
              minutes={.05}
              timerFinished={this.timerFinished}
            />;
      case BREAKLONG:
            return <Timer
              minutes={.05}
              timerFinished={this.timerFinished}
            />;
      default:
          return <p>Error</p>;
    }
  }

  handleStartWorkSession() {
    // set timerStatus to started and sessionType to work
    this.setState(() => {
      return {
        timerStatus: STARTED,
        sessionType: WORK
      }
    });
  }

  handleBreakShort() {
    // set timerStatus to started and sessionType to take5
    this.setState(() => {
      return {
        timerStatus: STARTED,
        sessionType: BREAKSHORT
      }
    });
  }

  handleBreakLong() {
    // set timerStatus to started and sessionType to take5
    this.setState(() => {
      return {
        timerStatus: STARTED,
        sessionType: BREAKLONG,
        workCounter: 0
      }
    });
  }

  timerFinished() {
    //play ding
    this.audioElement.play();

    //pause before taking timer display away
    setTimeout(() => {
      //set timerStatus to COMPLETE
      this.setState(() => ({ timerStatus: COMPLETE }));

      //if a work sesion completed => add +1 to workCounter
      if (this.state.sessionType === WORK) {
        this.setState((prevState) => {
          return {
            workCounter: prevState.workCounter + 1
          }
        });
      }
    }, 2500);
  }

  handleAddTask(newTask) {
    //validation if there is an empty string return error message
    if(!newTask) {
      return 'Enter a new task to add to your list.';
    }

    // add new task to the this.state.tasks array
    this.setState((prevState) => ({
      tasks: prevState.tasks.concat(newTask) //must use concat to not directly manipulate the prevState directly
    }));
  }

  handleClearList() {
    // clear this.state.tasks array
    this.setState(() => ({ tasks: [] }) );
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
                  hasTasks={this.state.tasks.length > 0}
                  handleClearList={this.handleClearList}
                />
              </div>
              {/* Timer Section */}
              <div className="col-sm-7 col-right">
                {/* buttons disapear when timer is going */}
                {
                  this.state.workCounter < 4 &&
                  (
                    this.state.timerStatus !== STARTED  &&
                    (
                      <div>
                        <button className="btn btn-primary" onClick={this.handleStartWorkSession}>
                          Start Work Session
                        </button>
                        <button className="btn btn-default"
                          onClick={this.handleBreakShort}
                          disabled={this.state.workCounter === 0} >
                          Take A Break
                        </button>
                      </div>
                    )
                  )
                }
                {/* 30-min break timer appears after 4 work sessions completed */}
                {this.state.workCounter === 4 &&
                  <div>
                    <p>Look at you being all productive! You deserve a longer break.</p>
                    <button className="btn btn-primary" onClick={this.handleBreakLong}>
                      30 Minute Break
                    </button>
                  </div>
                }
                {/* Timer apears when click work-session or break buttons */}
                { this.state.timerStatus === STARTED && this.getTimer(this.state.sessionType)}
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




export default App;
