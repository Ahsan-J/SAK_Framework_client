import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShortID from 'shortid'
import _ from 'lodash'
import {getModule} from '../../redux/axios/module.js'
import {clearModule} from '../../redux/actions/module.js'

class Screen extends Component {
  constructor(props){
    super(props);
    this.state={
        id:null,
        name:null,
        module_id:null,
    }
    this.onOpenModal = this.onOpenModal.bind(this);
  }
  addScreen(){
    this.props.addScreen({
        id:this.state.id,
        name:this.state.name,
        module_id:this.state.module_id,
        created_by:this.props.user.id,
    })
  }
  onOpenModal(){
    this.setState({
        id:ShortID.generate(),
        name:null,
        description:null,
    });
  }
  componentWillMount(){
    this.props.getModules({app_id:this.props.match.params.app_id});
  }
  componentWillUnmount(){
    this.props.clearModules();
  }
  render() {
    return (
        <div>
            <div className="float-left m-4">
                <h2>{this.props.match.params.app_id} - Screens</h2>
            </div>
            <div className="btn-group float-right m-4" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#add_module" onClick={this.onOpenModal} >Add a Module Screen</button>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr style={{backgroundColor:'#375a7f'}}>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Project Module</th>
                        <th scope="col">Created By</th>
                        <th scope="col">Created At </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.modules.map(function(value,index){
                        return (
                            <tr key={value.id + index}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.module_id}</td>
                                <td>{value.created_by}</td>
                                <td>{value.created_at}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className="modal fade" id="add_module" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">Add a Module Screen</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group row">
                                <div className="col-12 row">
                                    <div className="col-7 row">
                                        <label className="col-6 col-form-label">Screen id:</label>
                                        <div className="col-6">    
                                            <input type="text" readOnly className="form-control-plaintext" value={(_.isNull(this.state.id))?'':this.state.id}/>
                                        </div>
                                    </div>
                                    <div className="col-6 row">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Screen Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Screen Name" onChange={(e)=>{this.setState({name:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>Module : </label>
                                <select className="custom-select float-right col-6" onChange={(e)=>{this.setState({module_id:e.target.value})}}>
                                    {this.props.modules.map(function(item,index){
                                        return (
                                            <option key={item.id + index} value={item.id}> {item.name} </option>
                                        )
                                    })}
                                </select>
                            </div>
                        </form>
                    </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addModule} > Create Module Screen</button>
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
        modules : state.module.modules,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        getModules : (param_data)=>{dispatch(getModule(param_data))},
        clearModules : ()=>{dispatch(clearModule())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Screen);