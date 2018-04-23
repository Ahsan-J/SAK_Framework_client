import React, { Component } from 'react';
import {connect} from 'react-redux';
import {} from '../../redux/axios/test.js'

class TestCase extends Component {
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
    this.submitTestCase = this.submitTestCase.bind(this);
  }
  
  submitTestCase(){

  }
  
  render() {
    return (
        <div>
            <table>
            <thead>
                    <tr>
                        <td>
                            <input type="text" placeholder="Test Case Id" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,bugid:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Test Case Description" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,bugdesc:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Test Case Type" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,controlname:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Screen Id" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,screenname:e.target.value}})}}/>
                        </td>
                        <td>
                            <input type="text" placeholder="Project Id" onChange={(e)=>{this.setState({testCase:{...this.state.testCase,appid:e.target.value}})}}/>
                        </td>
                        <td>
                            <button className="btn-primary" onClick={()=>{this.submitTestCase()}}> Report a Bug </button>
                        </td>
                    </tr>
                </thead>
            </table>
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