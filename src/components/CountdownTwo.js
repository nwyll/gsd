import React, {Component} from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 0,
      complete: false
    }

    this.getRemainingTime = this.getRemainingTime.bind(this);
  }

  componentWillMount() {
// console.log(this.props.totalTimeInSeconds);
    this.setState(() => ({ timeRemaining: this.props.totalTimeInSeconds }));
  }

  componentDidMount() {
    setInterval(() => this.getRemainingTime(this.state.timeRemaining), 1000);
  }

  getRemainingTime(currentTime) {
console.log('getRemainingTime called');
    if (!this.state.complete) {
      const newTimeRemaining = currentTime - 1;
console.log('newtimeRemaining', newTimeRemaining);
      this.setState(() => ({ timeRemaining: newTimeRemaining }));

      if (newTimeRemaining === 0) {
        this.setState(() => ({ complete: true }));
      }
    }
  }

  formatTime(timeInSeconds) {
    let seconds = timeInSeconds % 60;
    let minutes = Math.floor(timeInSeconds / (60));

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
  }

  render() {
    const timeRemaining = this.state.timeRemaining;

    return (
      <div>
        <h1>{this.formatTime(timeRemaining)}</h1>
      </div>
    )
  }
}

export default Countdown;
