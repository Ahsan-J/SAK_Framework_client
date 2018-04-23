import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom'

var menu = [
    // {
    //     title:'Home',
    //     link_to:'/user',
    // },
    {
        title:'Bug',
        link_to:'/user/bugs',
    },
    {
        title:'Test Case',
        link_to:'/user/test-cases',
    },
    {
        title:'Log out',
        link_to:'/',
    },
    {
        title:'chart',
        link_to:'/user/bugs/chart',
    }
]
class Navbar extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    //   if(!this.props.auth){
    //     return (
    //         <Redirect to={'/'}/>
    //     )
    //   }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={styles.navBarContainer}>
            <Link className="navbar-brand" to="/">SAK Framework</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    {menu.map(function(item,index){
                        return (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" to={item.link_to}>{item.title}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
  }
}

const styles = {
    navBarContainer:{
        zIndex:50,
        position:'fixed',
        width:'100%',
    }
}

const mapStateToProps = (state)=>{
    return {
        auth:state.user.user.auth,
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);