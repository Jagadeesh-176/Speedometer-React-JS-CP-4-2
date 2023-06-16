// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="main-container">
        <h1 className="heading1">SPEEDOMETER</h1>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading2">Speed is {count}mph</h1>
        <p className="para">Min limit is 0mph, Max limit is 200mph</p>
        <div className="inner-container">
          <button type="button" className="btn-1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button type="button" className="btn-2" onClick={this.onDecrement}>
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
