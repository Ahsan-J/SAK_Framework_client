import React, { Component } from 'react';

class Collapseable extends Component {
  constructor(props){
    super(props);
    this.state = {
        show:false,
    }
  }
  
  render() {
      if(this.state.show){
          return (
              <ul className="list-group">
                <li onClick={()=>{this.setState({show:!this.state.show})}} className="list-group-item d-flex justify-content-between align-items-center">{this.props.title}</li>
                  {this.props.children}
              </ul>
          );
      }
      else{
          return( 
            <ul className="list-group">
                <li onClick={()=>{this.setState({show:!this.state.show})}} className="list-group-item d-flex justify-content-between align-items-center">{this.props.title}</li>
            </ul>
            );
        }
  }
}
export default Collapseable;
