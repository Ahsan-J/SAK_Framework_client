import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import io from 'socket.io-client'
import Login from './components/login.js'
import Dashboard from './components/dashboard.js'
import {Base_Url} from './config.js'
import './css/App.css';
var socket;
class App extends Component {
  constructor(props){
    super(props);
    socket = io(Base_Url);
  }
  componentDidMount(){
    socket.on('connect',function(){
      console.log('Connected')
    })
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/user" component={Dashboard}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
