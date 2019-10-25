import React             from 'react'
import { Router, Route } from 'react-router-dom';

import Landing from './components/Landing';
import history from './history';

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" component={Landing} />
    </Router>
  )
};

export default App;


