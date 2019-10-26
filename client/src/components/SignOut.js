import React, { useContext } from 'react';

import history     from '../history';
import AuthContext from '../contexts/AuthContext';

const Signout = () => {
  const { setToken } = useContext(AuthContext);

  localStorage.removeItem('token');
  setToken('');
  history.push('/');

  return (
    <div>Signing Out...</div>
  );
}


export default Signout;