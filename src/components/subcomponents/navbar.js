import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect,Link} from 'react-router-dom'
import avatarImg from '../../assets/img_avatar.png';

var menu = [
    // {
    //     title:'Home',
    //     link_to:'/user',
    // },
    // {
    //     title:'Bug',
    //     link_to:'/user/bugs',
    // },
    // {
    //     title:'Test Case',
    //     link_to:'/user/test-cases',
    // },
    // {
    //     title:'Log out',
    //     link_to:'/',
    // },
    // {
    //     title:'chart',
    //     link_to:'/user/bugs/chart',
    // }
]
class Navbar extends Component {
  constructor(props){
    super(props);
  }
  
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={styles.navBarContainer}>
            <Link className="navbar-brand" to="/" style={{fontSize:32}}>SAK Framework</Link>
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
            <div className="form-inline my-2 my-lg-0">
                <p className="mt-md-3 mb-md-2 mr-md-4 mr-sm-2 lead" >Welcome, {this.props.user.name} </p>
                <img src={avatarImg} style={styles.avatar} />
                <Link className="nav-link" to={"/"} style={{textDecoration:'none'}}>Log Out</Link>
            </div>
        </nav>
    );
  }
}

const styles = {
    avatar:{
        verticalAlign: 'middle',
        width: 50,
        height: 50,
        borderRadius: '50%',
    },
    navBarContainer:{
        zIndex:50,
        position:'fixed',
        width:'100%',
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

export default connect(mapStateToProps,mapDispatchToProps)(Navbar);