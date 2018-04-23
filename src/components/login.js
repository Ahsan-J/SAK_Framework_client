import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../redux/axios/user.js'
import {Redirect} from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      username:"",
      password:"",
    }
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e){
    e.preventDefault();
    this.props.login({
        user:this.state.username,
        password:this.state.password
    })
  }
  render() {
      if(this.props.auth){
          return (
              <Redirect to={'/user'}/>
          )
      }
    return (
      <div className="container" align="center" style={{position:'relative'}}>
      <div style={{width:"30%",position:'relative',right:0,left:0,top:'50%',bottom:'50%'}}>
      <h1 style={{margin:"50px 0px"}}>SAK Framework</h1>
        <form onSubmit={this.submitForm}>
          <div className="form-group">
          <div className="input-group">
            <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user" aria-hidden="true"></i>
            </span>
            </div>
            <input type="email" onChange={(e)=>{this.setState({username:e.target.value})}} className="form-control" aria-describedby="emailHelp" placeholder="Email" required/>
          </div>
          </div>
          <div className="form-group">

          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock" aria-hidden="true"></i>
              </span>
              </div>
              <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} className="form-control" placeholder="Password" required/>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      auth : state.user.user.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        login : (user)=>{dispatch(login(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
