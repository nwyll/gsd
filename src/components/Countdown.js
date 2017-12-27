import React, {Component, PropTypes} from 'react'
import moment from 'moment'

const COUNTDOWN_NOT_STARTED = 1
const COUNTDOWN_STARTED = 2
const COUNTDOWN_FINISHED = 3

class Countdown extends Component {
  constructor (props) {
    super(props)
    this.state = {
      remainingTime: 0,
      status: COUNTDOWN_NOT_STARTED,
      intervalId: null
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      let timer = setInterval(() => {
        this.tick()
      }, 1000)

      this.setState({
        status: COUNTDOWN_STARTED,
        intervalId: timer
      })

      this.tick()
    }, this.props.startDelay)
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId)
  }

  calculateRemainingTime = () => {
    return -1 * moment().diff(this.props.targetDate)
  }

  addLeadingZero = (value) => {
    if (value < 10) {
      return '0' + value.toString()
    }
    return value
  }

  tick = () => {
    this.setState({
      remainingTime: this.calculateRemainingTime()
    })

    if (this.state.remainingTime <= 0) {
      this.setState({
        status: COUNTDOWN_FINISHED
      })

      if (this.props.onFinished) {
        this.props.onFinished()
      }
      clearInterval(this.state.intervalId)
    }
  }

  renderRemainingTime = () => {
    let html = []
    let { format, leadingZero, timeSeparator } = this.props
    let { remainingTime } = this.state

    if (format.minute) {
      let minutes = moment.duration(remainingTime).get('minutes')
      if (leadingZero) {
        minutes = this.addLeadingZero(minutes)
      }
      html.push(
        <span className='react-cntdwn-minute' key='minute'>
          {minutes}{timeSeparator}
        </span>
      )
    }

    if (format.second) {
      let seconds = moment.duration(remainingTime).get('seconds')
      if (leadingZero) {
        seconds = this.addLeadingZero(seconds)
      }
      html.push(
        <span className='react-cntdwn-second' key='second'>
          {seconds}
        </span>
      )
    }

    return html
  }

  render = () => {
    if (this.state.status === COUNTDOWN_NOT_STARTED) {
      return (
        <span></span>
      )
    }
    return (
      <div className='react-cntdwn-timer'>
        {this.renderRemainingTime()}
      </div>
    )
  }
}

// Countdown.propTypes = {
//   targetDate: PropTypes.instanceOf(Date).isRequired,
//   interval: PropTypes.number,
//   startDelay: PropTypes.number,
//   format: PropTypes.object,
//   timeSeparator: PropTypes.string,
//   leadingZero: PropTypes.bool,
//   onFinished: PropTypes.func
// }

Countdown.defaultProps = {
  interval: 1000,
  startDelay: 0,
  format: {
    minute: 'MM',
    second: 'SS'
  },
  timeSeparator: ':',
  leadingZero: true
}

export default Countdown;
