import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShortID from 'shortid'
import _ from 'lodash'
import {addBug,getBug} from '../../redux/axios/bugs.js'
import {clearBug} from '../../redux/actions/bugs.js'

class Bugs extends Component {
  constructor(props){
    super(props);
    this.state={
        id:null,
        name:null,
        description:null,
        control_id:null,
        status:null,
    }
    
    this.addBug = this.addBug.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
  }
  addBug(){
    this.props.addBugs({
        id:this.state.id,
        name:this.state.name,
        description:this.state.description,
        control_id:this.state.control_id,
        status:this.state.status,
    })
  }
  onOpenModal(){
    this.setState({
        id:ShortID.generate(),
        name:null,
        description:null,
        control_id:null,
        status:null,
    });
  }
  componentWillMount(){
    this.props.getBugs({app_id:this.props.match.params.app_id});
  }
  componentWillUnmount(){
    this.props.clearBugs();
  }
  render() {
      console.log()
    return (
        <div>
            <div className="float-left m-4">
                <h2>{this.props.match.params.app_id} - Bugs</h2>
            </div>
            <div className="btn-group float-right m-4" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#add_bug" onClick={this.onOpenModal} >Report Bug</button>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr style={{backgroundColor:'#375a7f'}}>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Control Id</th>
                        <th scope="col">Reported by</th>
                        <th scope="col">Report Date</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.bugs.map(function(value,index){
                        return (
                            <tr key={value.id + index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.description}</td>
                                <td>{value.status}</td>
                                <td>{value.control_id}</td>
                                <td>{value.reported_by}</td>
                                <td>{value.report_date}</td>  
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="modal fade" id="add_bug" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">Reporting a Bug</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group row">
                                <div className="col-12 row">
                                    <div className="col-7 row">
                                        <label className="col-6 col-form-label">Bug id:</label>
                                        <div className="col-6">    
                                            <input type="text" readOnly className="form-control-plaintext" value={(_.isNull(this.state.id))?'':this.state.id}/>
                                        </div>
                                    </div>
                                    <div className="col-6 row">
                                        <label className="col-6 col-form-label">App id:</label>
                                        <div className="col-6">
                                            <input type="text" readOnly className="form-control-plaintext" defaultValue={this.props.match.params.app_id}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Bug Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Bug Name" onChange={(e)=>{this.setState({name:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>Bug Description</label>
                                <textarea className="form-control" rows="3" placeholder="Description about the New Bug" onChange={(e)=>{this.setState({description:e.target.value})}}></textarea>
                            </div>
                            <div className="form-group">
                                <div className="row">
                                    <div className="col-6 row">
                                        <label className="col-5 col-form-label">Status</label>
                                        <div className="col-7">    
                                            <select className="custom-select" onChange={(e)=>{this.setState({status:e.target.value})}} placeholder="Status">
                                                <option value="New">New</option>
                                                <option value="Resolved">Resolved</option>
                                                <option value="Re-open">Re-Open</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-6 row">
                                        <label className="col-6 col-form-label">Control id:</label>
                                        <div className="col-6">
                                            <select class="form-control" id="control_id_selection" onChange={(e)=> this.setState({control_id:e.target.value})}>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addBug} > Report a Bug </button>
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
        bugs : state.bugs.bugs,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        addBugs:(bugs)=>{dispatch(addBug(bugs))},
        getBugs : (param_data)=>{dispatch(getBug(param_data))},
        clearBugs : ()=>{dispatch(clearBug())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bugs);