import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './components/Timer';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  // }

  render() {
    const title = "Welcome to GSD";
    const subtitle = "Ready to get sh*t done?";

    return (
      <div className="App">
        <Header title={title} subtitle={subtitle}/>
        {/* <AddTask /> */}
        {/* <TaskList /> */}
          {/* <Task />  subconponent in TaskList*/}
        <Timer />
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
