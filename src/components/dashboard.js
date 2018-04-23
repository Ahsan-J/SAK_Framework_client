import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route,Switch} from 'react-router-dom'
import '../css/dashboard.css'
import Navbar from  './subcomponents/navbar.js';
import Bugs from './subcomponents/bugs.js'
import BugChart from './subcomponents/chart.js'
import TestCase from './subcomponents/test.js'
import Collapsable from './collapsable.js'

var Project=[{name:'Project 1',mod:['Mod 1','Mod 2']},{name:'Project 2',mod:['Mod 3','Mod 4']},{name:'Project 3',mod:['Mod 1','Mod 2']}];

class Dashboard extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <div>
            <Navbar/>
            <div className="left_panel">
                <h2>Projects</h2>
                {Project.map(function(value,index){
                    return (
                    <Collapsable key={index} title={value.name} className="project_collapse">
                        <ul className="list-group" >
                            {value.mod.map(function(item,i){
                                return (
                                    <li style={{cursor:'pointer'}} key={i} className="pl-4 ml-2 list-group-item d-flex justify-content-between align-items-right " >{item}</li>
                                );
                            })}
                        </ul>
                    </Collapsable>
                    );
                })}
            </div>

            <div className="right_panel">
                <Switch>
                    <Route exact path="/user" component={()=>{return <h1>Welcome</h1>}}/>
                    <Route exact path="/user/bugs" component={Bugs}/>
                    <Route exact path="/user/bugs/chart" component={BugChart}/>
                    <Route exact path="/user/test-cases" component={TestCase}/>
                </Switch>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        auth:state.user.user.auth,
        testCases:state.test.cases,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);

const testCase = (test)=>{
    return (
        <table className="table table-hover">
                <thead>
                    <tr>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <input type="text"/>
                        </td>
                        <td>
                            <button class="btn-primary"> Add a Test Case </button>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr style={{backgroundColor:'#375a7f'}}>
                        <th scope="col">Test Case id</th>
                        <th scope="col">Test Case Description</th>
                        <th scope="col">Test Case Type</th>
                        <th scope="col">Screen id</th>
                        <th scope="col">Project</th>
                        <th scope="col">Actions</th>
                    </tr>
                    {test.map(function(item,index){
                        return(
                        <tr key={index}>
                            <td>{item.testcaseid}</td>
                            <td>{item.testcasedesc}</td>
                            <td>{item.testcasetype}</td>
                            <td>{item.screenid}</td>
                            <td>{item.appid}</td>
                            <td>
                            <div class="btn-group-horizontal" >
                                <button>Edit</button>
                                <button>Delete</button>
                            </div>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
    );
}