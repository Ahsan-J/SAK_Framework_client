import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {getAllBugs,insertBug} from '../../redux/axios/bugs.js'

class Bugs extends Component {
  constructor(props){
    super(props);
    this.state = {
        modal:false,
    }
    this.submitBug = this.submitBug.bind(this);
    this.toggle = this.toggle.bind(this);
    this.props.getAllBugs();
  }
  
  submitBug(bug){
    this.props.reportBug(bug);
  }
  
  toggle(){
      this.setState({modal:!this.state.modal})
  }

  render() {
    return (
        <div>
            <div className="float-left m-4">
                <h2>Project - Bug</h2>
            </div>
            <div className="btn-group float-right m-4" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary btn-lg" onClick={this.toggle} data-toggle="modal">Report a Bug</button>
                <Link className="btn btn-success btn-lg" to="/user/bugs/chart" data-toggle="modal">BI</Link>
            </div>
            <Modal show={this.state.modal} toggle={this.toggle} handleSubmit={this.submitBug} />
            
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
                                backgroundColor:'#F99C8D',
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
                                <div className="btn-group" >
                                    <button className="btn-success"><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                    <button className="btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
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
class Modal extends React.Component{
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
            },
        }
    }
    render(){
        if(this.props.show){
            return (
                <div className="modal fade show" tabIndex="-1" role="dialog" aria-hidden="true" style={{display:'block',paddingRight:17}}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Report a Bug</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.toggle} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        
                            <input type="text" className="form-control" placeholder="Bug Id" onChange={(e)=>{this.setState({bug:{...this.state.bug,bugid:e.target.value}})}}/>
                       
                            <input type="text" className="form-control" placeholder="Bug Description" onChange={(e)=>{this.setState({bug:{...this.state.bug,bugdesc:e.target.value}})}}/>
                        
                       
                            <input type="text" className="form-control" placeholder="Control Name" onChange={(e)=>{this.setState({bug:{...this.state.bug,controlname:e.target.value}})}}/>
                            
                       
                            <input type="text" className="form-control" placeholder="Screen Name" onChange={(e)=>{this.setState({bug:{...this.state.bug,screenname:e.target.value}})}}/>
                        
                       
                            <input type="text" className="form-control" placeholder="Reported By" onChange={(e)=>{this.setState({bug:{...this.state.bug,reportedby:e.target.value}})}}/>
                        
                       
                            <input type="text" className="form-control" placeholder="Assign To" onChange={(e)=>{this.setState({bug:{...this.state.bug,assignto:e.target.value}})}}/>
                        
                       
                            <input type="text" className="form-control" placeholder="Project Id" onChange={(e)=>{this.setState({bug:{...this.state.bug,appid:e.target.value}})}}/>
                         
                       
                            <input type="text" className="form-control" placeholder="Status" onChange={(e)=>{this.setState({bug:{...this.state.bug,status:e.target.value}})}}/>
                        
                       
                            <input type="text" className="form-control" placeholder="Reported Date" onChange={(e)=>{this.setState({bug:{...this.state.bug,reportdate:e.target.value}})}}/>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal"  onClick={this.props.toggle}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>{this.props.handleSubmit(this.state.bug);this.props.toggle()}}> Add </button>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            );
        }
        else{
            return null;
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bugs);