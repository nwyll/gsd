import React, {Component} from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 0,
      complete: false
    }

    this.tick = this.tick.bind(this);
  }

  componentWillMount() {
    this.setState(() => ({ timeRemaining: this.props.totalTimeInSeconds }));
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(this.state.timeRemaining), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    if (!this.state.complete) {
      this.setState((prevState) => ({
        timeRemaining: prevState.timeRemaining - 1
      }));

      if (this.state.timeRemaining === 0) {
        this.setState(() => ({ complete: true }) );
        clearInterval(this.timer);
        setTimeout(() => this.props.timerFinished(), 2000);
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
