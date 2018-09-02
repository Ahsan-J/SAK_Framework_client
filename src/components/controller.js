import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,Switch,Link,Redirect} from 'react-router-dom'
import '../css/controller.css'
import Navbar from  './subcomponents/navbar.js';
import Bugs from './subcomponents/bugs.js'
import TestCase from './subcomponents/test.js'
import Screen from './subcomponents/screens.js'
import {addApp,getApps} from '../redux/axios/application.js'
import OverView from './subcomponents/overview.js'
import Module from './subcomponents/module.js'
import avatarImg from '../assets/img_avatar.png'
import axios from 'axios';
import {Base_Url} from '../config.js'

class Controller extends Component {
  constructor(props){
    super(props);
    this.state={
        name:'',
    }
    this.props.getApps();
    this.addApplication = this.addApplication.bind(this);
  }
  addApplication(){
    this.props.addApplication({
        name:this.state.name,
        created_by:this.props.user.id,
    });
    this.setState({
        name:''
    })
  }
  componentWillMount(){
    
  }

  render() {
    return (
        <div>
            <Navbar/>
            <div className="left_panel">
                <h2>Projects <span style={{cursor:'pointer'}} className="float-right" data-toggle="modal" data-target="#add_project"><i className="fa fa-plus" aria-hidden="true"></i></span></h2>
                {this.props.projects.map(function(value,index){
                    return (
                        <div key={index}>
                            <ul className="list-group" >
                            <li style={{cursor:'pointer'}} className="list-group-item d-flex justify-content-between align-items-right " data-toggle="collapse" data-target={'#'+value.name.replace(/\s/g, "")+index}><Link style={{display:'block'}} to={"/"+this.props.user.id+"/app/"+value.id}>{value.name}</Link></li>
                                <ul className="list-group collapse" id={value.name.replace(/\s/g, "")+index}>
                                    {}
                                </ul>
                            </ul>
                        </div>
                    );
                },this)}
            </div>

            <div className="right_panel">
                <Switch>
                    <Route exact path={"/"+this.props.match.params.user_id+"/app/:app_id"} component={OverView}/>
                    <Route exact path={"/"+this.props.match.params.user_id+"/app/:app_id/module"} component={Module}/>
                    <Route exact path={"/"+this.props.match.params.user_id+"/app/:app_id/screen"} component={Screen}/>
                    <Route exact path={"/"+this.props.match.params.user_id+"/app/:app_id/controls"} component={Module}/>
                    <Route exact path={"/"+this.props.match.params.user_id+"/app/:app_id/bugs"} component={Bugs}/>
                    <Route exact path={"/"+this.props.match.params.user_id+"/app/:app_id/test-cases"} component={Module}/>
                    <Route exact path={"/"+this.props.match.params.user_id+"/app/:app_id/users"} component={Module}/>
                </Switch>
            </div>

            <div className="modal fade" id="add_project" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">Add a Project</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label>Project Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Project Name" onChange={(e)=>{this.setState({name:e.target.value})}} />
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Created By : </label>
                                <div className="col-sm-9 row">
                                    <div className="col-2">
                                        <img src={avatarImg} style={styles.avatar} alt="User Avatar" />
                                    </div>
                                    <div className="col-10">
                                        <input type="text" readOnly={this.props.user.name} className="form-control-plaintext form-control-lg" value={this.props.user.name}/>
                                    </div>
                                </div>
                                </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addApplication} > Create Project </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        user:state.user.user,
        testCases:state.test.cases,
        projects:state.application.projects,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addApplication : (newApp)=>dispatch(addApp(newApp)),
        getApps : ()=>dispatch(getApps()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Controller);

const styles = {
    avatar:{
        verticalAlign: 'middle',
        width: 50,
        height: 50,
        borderRadius: '50%',
    },
}
