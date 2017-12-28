import React, { Component } from 'react';
import './App.css';
import Timer from './components/Timer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionType: "working",
      workCounter: 0
    }

    this.getTimer = this.getTimer.bind(this);
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

  isFinished(){
    //if work sesion completed => getTimer(take5);
  }

  render() {
    const title = "Welcome to GSD";
    const subtitle = "Ready to get sh*t done?";

    return (
      <div className="App panel panel-default center-block">
        <div className="panel-body">
          <div className="container-fluid">
            <div className="row">
              <Header title={title} subtitle={subtitle}/>
            </div>
            <div className="row">
              {/* WorkSession Timer */}
              {/* Break Timer - only shows after a sesion is completed */}
              {/* <AddTask /> */}
              {/* <TaskList /> */}
                {/* <Task />  subcomponent in TaskList*/}
              {/* <Timer /> */}
              {this.getTimer(this.state.sessionType)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <header className="App-header">
      <h1 className="App-title">{props.title}</h1>
      {props.subtitle && <h2 className="App-subtitle">{props.subtitle}</h2>}
    </header>
  );
};

export default App;
