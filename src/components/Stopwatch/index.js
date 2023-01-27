// Write your code here
import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {isTimer: true, text: '00'}

  onClickStart = () => {
    this.timerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  tick = () => {
    this.setState(prevState => ({text: parseInt(prevState.text) + 1}))
  }

  onClickStop = () => {
    clearInterval(this.timerId)
    this.setState(prevState => ({
      text: prevState.text,
      isTimer: prevState.isTimer,
    }))
  }

  onClickReset = () => {
    this.setState({isTimer: false})
  }

  render() {
    const {isTimer, text} = this.state

    return (
      <div className="app-container">
        <div className="main-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer-inner-container">
              <div className="timer-heading">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                  className="timer"
                />
                <h1 className="inner-heading">Timer</h1>
              </div>
              <h1 className="timer-text">{isTimer ? `00:${text}` : '00:00'}</h1>
              <div className="button-container">
                <button
                  type="button"
                  className="green button"
                  onClick={this.onClickStart}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="red button"
                  onClick={this.onClickStop}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="yellow button"
                  onClick={this.onClickReset}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
