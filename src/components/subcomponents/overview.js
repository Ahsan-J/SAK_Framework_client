import React, { Component} from 'react';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom'
import avatarImg from '../../assets/img_avatar.png';

class OverView extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <div>
            
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
    return {
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(OverView);