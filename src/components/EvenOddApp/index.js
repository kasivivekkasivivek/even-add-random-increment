// Write your code here
// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    count: 0,
  }

  onClickIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state

    const status = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading1">{count}</h1>
          <h3 className="heading3">Count is {status}</h3>
          <div>
            <button
              className="button"
              type="button"
              onClick={this.onClickIncrement}
            >
              Increment
            </button>
          </div>
          <p className="note-text">
            * Increase by random Number between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
