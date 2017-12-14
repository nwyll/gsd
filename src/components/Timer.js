import React, { Component } from 'react';
import Countdown, { zeroPad } from 'react-countdown-now';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      working: false
    }

    this.getTimer = this.getTimer.bind(this);
  }

  getTimer() {
    //if work session return <StartSession />
    //at end of session return Take5
    //after 4 work sessions make Take30 available

    if (this.state.working) {
      return <StartSession />;
    } else {
      //return <p>BreakTime</p>;
      return <Take5 />;
    }
  }
  render() {
    return(
      <div>
        {this.getTimer(this.state.working)}
      </div>
    );
  }
}

class StartSession extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inSession: false
    }

    this.startTimer = this.startTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  startTimer() {
    this.setState((prevState) => {
      return { inSession: true }
    });
  }

  reset() {
    this.setState((prevState) => {
      return { inSession: false }
    });
  }


  renderer({ minutes, seconds, completed }) {
    const Completed = () => {
      return <h1>Look at you being all productive!</h1>;
    }

    if (completed) {
      return <Completed />;
    } else {
      return <h1>{zeroPad(minutes)}:{zeroPad(seconds)}</h1>;
    }
  };

  render() {
    return (
      <div>
        {!this.state.inSession && (
          <h1>25:00</h1>
        )}
        {this.state.inSession && (
          <Countdown
            date={Date.now() + 1500000}
            renderer={this.renderer}
          />
        )}
        <button onClick={this.startTimer}>Start New Session</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

class Take5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inSession: false
    }

    this.startTimer = this.startTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  startTimer() {
    this.setState((prevState) => {
      return { inSession: true }
    });
  }

  reset() {
    this.setState((prevState) => {
      return { inSession: false }
    });
  }


  renderer({ minutes, seconds, completed }) {
    const Completed = () => {
      return <h1>Get back at it!</h1>;
    }

    if (completed) {
      return <Completed />;
    } else {
      return <h1>{minutes}:{zeroPad(seconds)}</h1>;
    }
  };

  render() {
    return (
      <div>
        {!this.state.inSession && (
          <h1>5:00</h1>
        )}
        {this.state.inSession && (
          <Countdown
            date={Date.now() + 300000}
            renderer={this.renderer}
          />
        )}
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}


export default Timer;
