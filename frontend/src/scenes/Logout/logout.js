import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../_actions/auth';


class LogoutPage extends Component {
    render(){
        //reset root reducer here and cleanups here
        this.props.logout();
        return(
            <Redirect to='/' />
        );
    }
}

const mapDispatchToProps = {
    logout,
}

export default connect(null,mapDispatchToProps)(LogoutPage);