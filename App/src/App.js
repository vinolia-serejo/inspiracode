import React from 'react'
import Home from './Pages/Home'
import Login from './Pages/Login'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      logged: false
    }
  }

  redirect = () => {
    if (this.state.logged === true) {
      return <Redirect to="/home" />
    }
  }

  handleLogin = () => {
    // if (validateLogin()) {
    this.setState({
      logged: true
    })
    // }
  }

  handleLogout = () => {
    this.setState({
      logged: false
    })
  }

  render() {
    return (
      <Router basename="/">
        {this.redirect()}
        <div>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route
              path="/login"
              render={() => <Login action={this.handleLogin} />}
            />
            <Route
              path="/home"
              render={() =>
                this.state.logged === true ? (
                  <Home action={this.handleLogout} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    )
  }
}
