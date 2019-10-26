import React                     from 'react'
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';
import history          from './history';
import { AuthProvider } from './contexts/AuthContext';
import useAuth          from './hooks/useAuth';
import Navbar           from './components/NavBar';
import Signout          from './components/SignOut';
import Landing          from './components/LandingPage';
import Signin           from './components/SigninPage';

const App = () => {
  useAuth();

  return (
    <Router history={history}>
      <div className="container">
        <Navbar/>
        <Switch>
          <Route path='/signout' component={Signout} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  )
};

export default () => <AuthProvider><App /></AuthProvider>;


