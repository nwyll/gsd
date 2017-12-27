import React, {Component} from 'react';

class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeRemaining: 0
    }
  }

  componentDidMount() {
    this.setState(() => ({ timeRemaining: this.props.minutes * 60 }));
  }

  getRemainingTime() {

  }

  formatTime() {
    
  }

  render() {
    return (
      <div>
        <h1>{this.state.timeRemaining}</h1>
      </div>
    )
  }
}

export default Countdown;
