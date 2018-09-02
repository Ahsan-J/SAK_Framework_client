import React, { Component } from 'react';
import {connect} from 'react-redux';
import {login} from '../redux/axios/user.js'
import {Redirect,Link} from 'react-router-dom'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:"",
      password:"",
    }
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e){
    e.preventDefault();
    this.props.login({
        user:this.state.user,
        password:this.state.password
    })
  }
  render() {
      if(this.props.user.auth){
          return (
              <Redirect to={'/'+this.props.user.id}/>
          )
      }
    return (
      <div className="container">
      <form onSubmit={this.submitForm} className="col offset-md-4">
      <h1 className="m-3">SAK Framework</h1>
          <div className="form-group col col-md-5">
          <div className="input-group">
            <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user fa-2x" aria-hidden="true"></i>
            </span>
            </div>
            <input type="email" onChange={(e)=>{this.setState({user:e.target.value})}} className="form-control form-control-lg" aria-describedby="emailHelp" placeholder="Email" required/>
          </div>
          </div>
          <div className="form-group col col-md-5">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="fa fa-lock fa-2x" aria-hidden="true"></i>
              </span>
              </div>
              <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} className="form-control form-control-lg" placeholder="Password" required/>
            </div>
          </div>
          <div className="col offset-md-2">
            <button type="submit" className="btn btn-primary btn-lg">Log In</button>
          </div>
          <Link to="/register">Register Yourself for First Time</Link>
      </form>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
      user : state.user.user
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        login : (user)=>{dispatch(login(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
