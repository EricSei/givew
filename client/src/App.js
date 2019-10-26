import React                     from 'react'
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar  from './components/NavBar';
import Landing from './components/LandingPage';
import Signin  from './components/SigninPage';
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/" component={Landing} />
        </Switch>
      </div>
    </Router>
  )
};

export default App;


