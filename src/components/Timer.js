import React, { Component } from 'react';
import Countdown from './Countdown';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timerGoing: false,
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
            <button className="btn btn-outline-primary" onClick={this.startTimer}>Start</button>
          </div>
        )}
        {this.state.timerGoing && (
          <div>
            <Countdown
              totalTimeInSeconds={this.props.minutes * 60}
              timerFinished={this.props.timerFinished}
            />
            <button className="btn btn-outline-secondary" onClick={this.reset}>Reset</button>
          </div>
        )}
      </div>
    );
  }
}

export default Timer;
