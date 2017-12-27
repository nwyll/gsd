import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionType: "take5",
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
      <div className="App">
        <Header title={title} subtitle={subtitle}/>
        {/* <AddTask /> */}
        {/* <TaskList /> */}
          {/* <Task />  subcomponent in TaskList*/}
        {/* <Timer /> */}
        {this.getTimer(this.state.sessionType)}
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <h2 className="App-subtitle">{this.props.subtitle}</h2>
      </header>
    );
  }
}

export default App;
