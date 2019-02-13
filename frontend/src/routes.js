import React, { Component } from 'react';
import {history} from './configureStore';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

// Import Pages/Components Here
// Homepage Component Already imported in App.js
import App from './App/App';
import LoginPage from './scenes/Login/login';
import SignupPage from './scenes/Signup/signup';
import LogoutPage from './scenes/Logout/logout';

class Routes extends Component{
    render(){
        return(
            <ConnectedRouter history={history}>
            <div>
                {/* Pages Routed here, Components Routed inside App.js */}
                <Switch>
                    <Route path='/login' component={LoginPage} />
                    <Route exact path='/logout' component={LogoutPage} />
                    <Route path='/signup' component={SignupPage} />    
                    <Route path='/' component={App} />
                </Switch>
            </div>
            </ConnectedRouter>
        );
    }
}

export default Routes;