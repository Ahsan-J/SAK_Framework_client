import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllBugs,insertBug} from '../../redux/axios/bugs.js'

class Bugs extends Component {
  constructor(props){
    super(props);
    this.state = {
        bug:{
            bugid:null,
            bugdesc:null,
            controlname:null,
            screenname:null,
            reportedby:null,
            assignto:null,
            appid:null,
            status:null,
            userid:null,
            reportdate:null,
        }
    }
    this.submitBug = this.submitBug.bind(this);
    this.props.getAllBugs();
  }
  
  submitBug(){
    this.props.reportBug(this.state.bug);
  }
  
  render() {
    return (
        <div>
            <table>
            <thead>
                    <tr>
                        <td>
                            <input type="text" placeholder="Bug Id" onChange={(e)=>{this.setState({bug:{...this.state.bug,bugid:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Bug Description" onChange={(e)=>{this.setState({bug:{...this.state.bug,bugdesc:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Control Name" onChange={(e)=>{this.setState({bug:{...this.state.bug,controlname:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Screen Name" onChange={(e)=>{this.setState({bug:{...this.state.bug,screenname:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Reported By" onChange={(e)=>{this.setState({bug:{...this.state.bug,reportedby:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Assign To" onChange={(e)=>{this.setState({bug:{...this.state.bug,assignto:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Project Id" onChange={(e)=>{this.setState({bug:{...this.state.bug,appid:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Status" onChange={(e)=>{this.setState({bug:{...this.state.bug,status:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Reported Date" onChange={(e)=>{this.setState({bug:{...this.state.bug,reportdate:e.target.value}})}}/>
                        </td>
                        <td>
                            <button className="btn-primary" onClick={()=>{this.submitBug()}}> Report a Bug </button>
                        </td>
                    </tr>
                </thead>
            </table>
            <table className="table table-hover">
                <thead>
                    <tr style={{backgroundColor:'#375a7f'}}>
                        <th scope="col">Bug id</th>
                        <th scope="col">Bug Description</th>
                        <th scope="col">Control Name</th>
                        <th scope="col">Screen Name</th>
                        <th scope="col">Reported by</th>
                        <th scope="col">assignto</th>
                        <th scope="col">Project Id</th>
                        <th scope="col">Status</th>
                        <th scope="col">Reported Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.bugs.map(function(item,index){
                        var duplicateColor={
                            
                        }
                        if(item.duplicate==true){
                            duplicateColor={
                                backgroundColor:'red',
                            }
                        }
                        return(
                        <tr key={index} style={duplicateColor}>
                            <td>{item.bugid}</td>
                            <td>{item.bugdesc}</td>
                            <td>{item.controlname}</td>
                            <td>{item.screenname}</td>
                            <td>{item.reportedby}</td>
                            <td>{item.assignto}</td>
                            <td>{item.appid}</td>
                            <td>{item.status}</td>
                            <td>{item.reportdate}</td>
                            <td>
                                <div className="btn-group-horizontal" >
                                    <button className="btn-success">Edit</button>
                                    <button className="btn-danger">Delete</button>
                                </div>
                            </td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        bugs:state.bugs.bugs,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getAllBugs:()=>{dispatch(getAllBugs())},
        reportBug:(bug)=>{dispatch(insertBug(bug))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bugs);