import React, { Component } from 'react';
import Countdown from './CountdownTwo';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerGoing: false,
      timerComplete: false
    }

    this.startTimer = this.startTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  startTimer() {
    this.setState(() => ({ timerGoing: true }) );
  }

  reset() {
    this.setState(() => ({ timerGoing: false }) );
  }

  render() {
    return (
      <div>
        {!this.state.timerGoing && (
          <div>
            <h1>{this.props.minutes}:00</h1>
            <button onClick={this.startTimer}>Start</button>
          </div>
        )}
        {this.state.timerGoing && (
          <div>
            <Countdown totalTimeInSeconds={this.props.minutes * 60} />
            <button onClick={this.reset}>Reset</button>
          </div>
        )}


      </div>
    );
  }
}

// const Complete = () => <h2>Look at you being productive!</h2>;

export default Timer;
