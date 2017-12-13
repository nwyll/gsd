import React, { Component } from 'react';
import Countdown, { zeroPad } from 'react-countdown-now';

class Timer extends Component {
    render() {
    return(
      <div>
        <StartSession />
          {/* <TakeBreak /> */}
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
  }

  startTimer() {
    this.setState((prevState) => {
      return { inSession: !prevState.inSession }
    });
  }

  render() {
    const Completed = () => <h1>Look at you being all productive!</h1>;
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        return <Completed />;
      } else {
        return <h1>{zeroPad(minutes)}:{zeroPad(seconds)}</h1>;
      }
    };

    return (
      <div>
        {!this.state.inSession && (
          <h1>25:00</h1>
        )}
        {this.state.inSession && (
          <Countdown
            date={Date.now() + 1500000}
            renderer={renderer}
          />
        )}
        <button onClick={this.startTimer}>Start New Session</button>
        <button onClick={this.startTimer}>Reset</button>
      </div>
    );
  }
}


export default Timer;
