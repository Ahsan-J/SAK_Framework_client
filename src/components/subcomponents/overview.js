import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class OverView extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <section>
            <div className="row">
              <div className="col-lg-4">
                <div className="card border-primary m-3">
                  <h3 className="card-header">Modules</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div className="card-body">
                    <Link to={"/"+this.props.user.id+"/app/"+this.props.match.params.app_id+"/module"} className="float-right">See More</Link>
          
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
              <div className="card border-primary m-3">
                  <h3 className="card-header">Screens</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div className="card-body">
                    <Link to={"/"+this.props.user.id+"/app/"+this.props.match.params.app_id+"/screen"} className="float-right">See More</Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
              <div className="card border-primary m-3">
                  <h3 className="card-header">Controls</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div className="card-body">
                    <Link to={"/"+this.props.user.id+"/app/"+this.props.match.params.app_id+"/controls"} className="float-right">See More</Link>
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="card border-primary m-3">
                  <h3 className="card-header">Test Cases</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div className="card-body">
                    <Link to={"/"+this.props.user.id+"/app/"+this.props.match.params.app_id+"/test-cases"} className="float-right">See More</Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
              <div className="card border-primary m-3">
                  <h3 className="card-header">Bugs</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div className="card-body">
                    <Link to={"/"+this.props.user.id+"/app/"+this.props.match.params.app_id+"/bugs"} className="float-right">See More</Link>
                    
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
              <div className="card border-primary m-3">
                  <h3 className="card-header">Assigned Users</h3>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                  <div className="card-body">
                    <Link to={"/"+this.props.user.id+"/app/"+this.props.match.params.app_id+"/users"} className="float-right">See More</Link>
                    
                  </div>
                </div>
              </div>
            </div>
        </section>
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

export default connect(mapStateToProps,mapDispatchToProps)(OverView);