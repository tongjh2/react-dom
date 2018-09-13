import React from 'react';
import { Route,Redirect,HashRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// import App from './App';
import Home from './components/home';
import User from './components/user';

const Root = () => (

    <HashRouter>
        <div>
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
            <Route render={() => <Redirect to="/" />} />
        </div>
    </HashRouter>
)

export default hot(module)(Root);