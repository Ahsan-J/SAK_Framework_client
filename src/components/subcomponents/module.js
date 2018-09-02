import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShortID from 'shortid'
import _ from 'lodash'
import {addModule, getModule, updateModule} from '../../redux/axios/module.js'
import {clearModule} from '../../redux/actions/module.js'
import moment from 'moment'

class Module extends Component {
  constructor(props){
    super(props);
    this.state={
        id:null,
        name:null,
        description:null,
        mode:'',
    }
    this.onEditModal = this.onEditModal.bind(this);
    this.updateModule = this.updateModule.bind(this);
    this.addModule = this.addModule.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
  }
  addModule(){
    this.props.addModule({
        id:this.state.id,
        name:this.state.name,
        description:this.state.description,
        app_id:this.props.match.params.app_id,
        created_by:this.props.user.id,
    })
  }
  updateModule(){
      this.props.updateModule({
          id:this.state.id,
          name:this.state.name,
          description:this.state.description,
      })
  }
  onEditModal(Module){
    this.setState({
        id:Module.id,
        name:Module.name,
        description:Module.description,
        mode:'update',
    })
  }
  onOpenModal(){
    this.setState({
        id:ShortID.generate(),
        name:null,
        description:null,
        mode:'add',
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
                <h2>{this.props.match.params.app_id} - Module</h2>
            </div>
            <div className="btn-group float-right m-4" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#add_module" onClick={this.onOpenModal} >Add a Project Module</button>
            </div>

            <table className="table table-hover">
                <thead>
                    <tr style={{backgroundColor:'#375a7f'}}>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Created at</th>
                        <th scope="col">Project Id</th>
                        <th scope="col">Parent Module</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.modules.map(function(value,index){
                        return (
                            <tr key={value.id + index}>

                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.description}</td>
                                <td>{value.created_at}</td>
                                <td>{value.app_id}</td>
                                <td>{value.parent_module_id}</td>
                                <td>
                                    <div className="btn-group-horizontal" >
                                        <button className="btn btn-primary" data-toggle="modal" data-target="#add_module" onClick={()=>this.onEditModal(value)}><i className="fa fa-pencil" aria-hidden="true"></i></button>
                                        <button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                    </div>
                                </td>
                            </tr>
                        )
                    },this)}
                </tbody>
            </table>
            <div className="modal fade" id="add_module" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">{(this.state.mode==='add')?"Add a Project Module":"Updating a Project Module"}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group row">
                                <div className="col-12 row">
                                    <div className="col-7 row">
                                        <label className="col-6 col-form-label">Module id:</label>
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
                                <label>Module Name</label>
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Module Name" value={(this.state.name===null)?'':this.state.name} onChange={(e)=>{this.setState({name:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>Module Description</label>
                                <textarea className="form-control" rows="3" placeholder="Description about the New Module" value={(this.state.description===null)?'':this.state.description} onChange={(e)=>{this.setState({description:e.target.value})}}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={(this.state.mode==='add')?this.addModule:this.updateModule} > {(this.state.mode==='add')?"Create Project Module":"Update Project Module"} </button>
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
        addModule:(modules)=>{dispatch(addModule(modules))},
        updateModule:(modules)=>{dispatch(updateModule(modules))},
        getModules : (param_data)=>{dispatch(getModule(param_data))},
        clearModules : ()=>{dispatch(clearModule())},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Module);