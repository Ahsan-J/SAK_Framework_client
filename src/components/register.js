import React, { Component } from 'react';
import {connect} from 'react-redux';
import {register} from '../redux/axios/user.js'
import {Redirect} from 'react-router-dom'
import _ from 'lodash'

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:null,
      password:null,
      name:null,
      role:null,
    }
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e){
    e.preventDefault();
    if(!_.isEmpty(this.state.user)&&_.isString(this.state.name)&& !_.isEmpty(this.state.name)&&_.isString(this.state.user)&& !_.isEmpty(this.state.user)&&_.isString(this.state.password)&& !_.isEmpty(this.state.password)){
        this.props.register({
            user:this.state.user,
            password:this.state.password,
            name:this.state.name,
            role:this.state.role,
        })
    }else{
        alert('Fill the Form')
    }
  }
  render() {
      if(this.props.auth){
          return (
              <Redirect to={'/user'}/>
          )
      }
    return (
      <div className="container">
        <form  onSubmit={this.submitForm}>
  <fieldset className="offset-md-4">
      <h1>SAK Framework Registration</h1>
    <div className="form-group col-md-8">
      <label htmlFor="exampleInputEmail1">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" onChange={(e)=>{this.setState({user:e.target.value})}}/>
    </div>
    <div className="form-group col-md-8">
      <label htmlFor="exampleInputPassword1">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
    </div>
    <div className="form-group col-md-8">
      <label htmlFor="name">Name</label>
      <input type="text" className="form-control" pattern={"([A-Za-z])+"} id="name" placeholder="Enter Name" onChange={(e)=>{this.setState({name:e.target.value})}}/>
    </div>

    <div className="form-group col-md-8">
      <div className="form-check">
        <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="CLIENT" onClick={(e)=>{this.setState({role:e.target.value})}} checked={this.state.role==="CLIENT"}/>
          Client
        </label>
      </div>
      <div className="form-check">
      <label className="form-check-label">
          <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="USER" onClick={(e)=>{this.setState({role:e.target.value})}} checked={this.state.role==="USER"}/>
          User
        </label>
      </div>
    </div>
    <button type="submit" className="btn btn-primary m-3">Submit</button>
  </fieldset>
</form>
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
        register : (user)=>{dispatch(register(user))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);
