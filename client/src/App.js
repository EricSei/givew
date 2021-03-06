import React from 'react'
import { Router, Route, Switch } from 'react-router-dom';

import './App.css';
import history            from  './history';
import { UserProvider }   from './contexts/UserContext';
import { AuthProvider }   from './contexts/AuthContext';
import { ItemsProvider }  from './contexts/ItemsContext';
import useAuth            from './hooks/useAuth';
import Navbar             from './components/NavBar';
import Signout            from './components/SignOut';
import Landing            from './components/LandingPage';
import Signin             from './components/SigninPage';
import Signup             from './components/SignUpPage';
import CreateDonationPage from './components/CreateDonationPage';
import ItemPage           from './components/ItemPage';
import WaitlistPage       from './components/WaitlistPage';
import BidlistPage        from './components/BidlistPage';
import PickupListPage     from './components/PickupListPage';
import DropoffListPage    from './components/DropoffListPage';
import Profile            from './components/Profile';

const App = () => {
  useAuth();

  return (
    <Router history={history}>
      <div className="container">
        <Switch>
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route component={DefaultContainer} />
        </Switch>
      </div>
    </Router>
  )
};

const DefaultContainer = () => (
  <>

    <Navbar />
    <Route path="/profile" component={Profile} />
    <Route path="/dropofflist" component={DropoffListPage} />
    <Route path="/pickuplist" component={PickupListPage} />
    <Route path="/donate/create" component={CreateDonationPage} />
    <Route path="/signout" component={Signout} />
    <Route path="/items/waitlist" component={WaitlistPage} />
    <Route path="/items/bidlist" component={BidlistPage} />
    <Route path="/item" component={ItemPage} />
    <Route path="/" component={Landing} exact />
  </>
);

export default () => (
  <UserProvider>
    <AuthProvider>
      <ItemsProvider>
        <App />
      </ItemsProvider>
    </AuthProvider>
  </UserProvider>
);


