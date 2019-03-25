import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home1 from "./components/Home1"
import Login from './components/Login';
import Signup from './components/Signup';
import Axios from 'axios';
import Nav from './components/Nav';
// import './App.css';

class App extends Component {
  state = {
    isLoaded: false,
    userLogged: ''
  }
  componentDidMount() {
    Axios.post("/check")
      .then((data) => {
        this.setState({
          isLoaded: true,
          userLogged: data.data.user
        }, () => { console.log('user', this.state.userLogged) })
      }).catch((error) => {
        this.setState({
          isLoaded: true
        })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoaded ?

          <BrowserRouter>
            <Nav userLogged={this.state.userLogged} />
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Signup} />
              <Route exact path="/" component={Home1} />
            </Switch>
          </BrowserRouter>
          : ""}

      </div>
    );
  }
}

export default App;
