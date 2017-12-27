import React, { Component } from 'react';
// import Countdown, { zeroPad } from 'react-countdown-now';
import Countdown from './CountdownTwo';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inSession: false,
      timerComplete: false
    }

    this.startTimer = this.startTimer.bind(this);
    this.reset = this.reset.bind(this);
    // this.renderer = this.renderer.bind(this);
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

  // renderer({ minutes, seconds, completed }) {
  //   if (completed) {
  //     return <Complete />;
  //   } else {
  //     if (minutes < 10) {
  //       return <h1>{minutes}:{zeroPad(seconds)}</h1>;
  //     } else {
  //       return <h1>{zeroPad(minutes)}:{zeroPad(seconds)}</h1>;
  //     }
  //   }
  // };

  render() {
    return (
      <div>
        {!this.state.inSession && (
          <div>
            <h1>{this.props.minutes}:00</h1>
            <button onClick={this.startTimer}>Start</button>
          </div>
        )}
        {this.state.inSession && (
          <div>
            <Countdown minutes={this.props.minutes} />
            {/* <Countdown
              targetDate={Date.now() + (this.props.minutes * 60 * 1000)}
              // renderer={this.renderer}
            /> */}
            <button onClick={this.reset}>Reset</button>
          </div>
        )}


      </div>
    );
  }
}

// const Complete = () => <h2>Look at you being productive!</h2>;

export default Timer;
