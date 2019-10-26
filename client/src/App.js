import React                     from 'react'
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar  from './components/NavBar';
import Signout from './components/SignOut';
import Landing from './components/LandingPage';
import Signin  from './components/SigninPage';
import history from './history';


const App = () => {
  return (
    <Router history={history}>
      <div className="container">
        <Navbar isSignedIn/>
        <Switch>
          <Route path='/signout' component={Signout} />
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;


