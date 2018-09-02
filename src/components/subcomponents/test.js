import React, { Component } from 'react';
import {connect} from 'react-redux';
import {} from '../../redux/axios/test.js'

class TestCase extends Component {
  constructor(props){
    super(props);
    this.state={
        modal:false,
    }
    this.toggle = this.toggle.bind(this);
    this.submitTestCase = this.submitTestCase.bind(this);
  }
  toggle(){
      this.setState({
          modal:!this.state.modal,
      })
  }
  
  submitTestCase(){

  }
  
  render() {
    return (
        <div>
             <div className="float-left m-4">
                <h2>Project - Test Case</h2>
            </div>
            <div className="btn-group float-right m-4" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary btn-lg" onClick={this.toggle} data-toggle="modal">Create a Test Case</button>
            </div>
            <Modal show={this.state.modal} toggle={this.toggle} handleSubmit={this.submitTestCase} />
            <table className="table table-hover">
                <thead>
                    <tr style={{backgroundColor:'#375a7f'}}>
                        <th scope="col">Test Case id</th>
                        <th scope="col">Test Case Description</th>
                        <th scope="col">Test Case Type</th>
                        <th scope="col">Screen id</th>
                        <th scope="col">Project</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.test.map(function(item,index){
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
        </div>
    );
  }
}

class Modal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            testCase:{
                testcaseid:null,
                testcasedesc:null,
                testcasetype:null,
                screenid:null,
                appid:null,
            }
        }
    }
    render(){
        if(this.props.show){
            return (
                <div className="modal fade show" tabIndex="-1" role="dialog" aria-hidden="true" style={{display:'block',paddingRight:17}}>
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Create a Test Case</h5>
                            <button type="button" className="close" data-dismiss="modal" onClick={this.props.toggle} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                        
                            <input type="text" className="form-control" placeholder="Test Case Id" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,bugid:e.target.value}})}}/>
                        
                            <input type="text" className="form-control" placeholder="Test Case Description" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,bugdesc:e.target.value}})}}/>
                        
                            <input type="text" className="form-control" placeholder="Test Case Type" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,controlname:e.target.value}})}}/>
                        
                            <input type="text" className="form-control" placeholder="Screen Id" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,screenname:e.target.value}})}}/>
                        
                            <input type="text" className="form-control" placeholder="Project Id" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,appid:e.target.value}})}}/>
                        
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.props.toggle}>Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>{this.props.handleSubmit(this.state.testCase);this.props.toggle()}}> Add </button>
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

const mapStateToProps = (state)=>{
    return {
        test:state.test.testCases,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestCase);