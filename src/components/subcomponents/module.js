import React, { Component } from 'react';
import {connect} from 'react-redux';
import ShortID from 'shortid'
import _ from 'lodash'
// import {} from '../../redux/axios/module.js'

class Bugs extends Component {
  constructor(props){
    super(props);
    this.state={
        id:null,
        name:null,
        descriprion:null,
    }
    this.addModule = this.addModule.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
  }
  addModule(){

  }
  onOpenModal(){
    this.setState({
        id:ShortID.generate(),
        name:null,
        descriprion:null,
    });
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
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
            <div className="modal fade" id="add_module" tabIndex="-1" role="dialog" aria-labelledby="ModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="ModalLabel">Add a Project Module</h5>
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
                                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Module Name" onChange={(e)=>{this.setState({name:e.target.value})}} />
                            </div>
                            <div className="form-group">
                                <label>Module Description</label>
                                <textarea className="form-control" rows="3" placeholder="Description about the New Module" onChange={(e)=>{console.log(e.target.value)}}></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.addModule} > Create Project Module </button>
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
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Bugs);