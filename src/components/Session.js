import React, { Component } from 'react';
import Countdown, { zeroPad } from 'react-countdown-now';

class Session extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sessionType: "working"
    }

    this.getTimer = this.getTimer.bind(this);
  }

  getTimer(type) {
    //if work session return <StartSession />
    //at end of session return Take5
    //after 4 work sessions make Take30 available

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
  render() {
    return(
      <div>
        {this.getTimer(this.state.sessionType)}
      </div>
    );
  }
}

class Timer extends Component {
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
      return <h1>{this.props.completionMessage}</h1>;
    }

    if (completed) {
      return <Completed />;
    } else {
      if (minutes < 10) {
        return <h1>{minutes}:{zeroPad(seconds)}</h1>;
      } else {
        return <h1>{zeroPad(minutes)}:{zeroPad(seconds)}</h1>;
      }
    }
  };

  render() {
    return (
      <div>
        {!this.state.inSession && (
          <h1>{this.props.minutes}:00</h1>
        )}
        {this.state.inSession && (
          <Countdown
            date={Date.now() + (this.props.minutes * 60 * 1000)}
            renderer={this.renderer}
          />
        )}
        <button onClick={this.startTimer}>Start</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Session;
