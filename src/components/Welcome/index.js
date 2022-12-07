// Write your code here
import {Component} from 'react'

import './index.css'

class WelcomeApp extends Component {
  state = {isLoggedIn: true}

  subscribe = () => {
    this.setState(prevState => {
      console.log('subscribe')
      return {isLoggedIn: false}
    })
  }

  subscribed = () => {
    this.setState(prevState => {
      console.log('subscribed')
      return {isLoggedIn: true}
    })
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return (
        <button className="button" type="button" onClick={this.subscribe}>
          Subscribe
        </button>
      )
    }
    return (
      <button className="button" type="button" onClick={this.subscribed}>
        Subscribed
      </button>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <div>{this.renderAuthButton()}</div>
      </div>
    )
  }
}

export default WelcomeApp
