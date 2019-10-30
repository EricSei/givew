import React                     from 'react'
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';
import history            from './history';
import { AuthProvider }   from './contexts/AuthContext';
import useAuth            from './hooks/useAuth';
import Navbar             from './components/NavBar';
import Signout            from './components/SignOut';
import Landing            from './components/LandingPage';
import Signin             from './components/SigninPage';
import Signup             from './components/SignUpPage';
import CreateDonationPage from './components/CreateDonationPage';

const App = () => {
  useAuth();

  return (
    <Router history={history}>
      <div className="container">
        <Switch>
          <Route path="/signin" component={SigninContainer} />
          <Route path="/signup" component={SignupContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router>
  )
};

const SigninContainer = () => (
  <>
    <Route path="/signin" component={Signin} />
  </>
);

const SignupContainer = () => (
  <>
    <Route path="/signup" component={Signup} />
  </>
);

const DefaultContainer = () => (
  <>
    <Navbar />
    <Route path="/donate/create" component={CreateDonationPage} />
    <Route path='/signout' component={Signout} />
    <Route path="/" component={Landing} />
  </>
);

export default () => <AuthProvider><App /></AuthProvider>;


