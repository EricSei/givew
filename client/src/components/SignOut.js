import React, { useContext, useEffect } from 'react';

import history     from '../history';
import backend     from '../apis/backend';
import AuthContext from '../contexts/AuthContext';

const Signout = () => {
  const { setIsAuth } = useContext(AuthContext);

  useEffect(() => {
    backend.post('/auth/signout');
    setIsAuth(false);
    history.push('/');
  }, []);

  return (
    <div>Signing Out...</div>
  );
}


export default Signout;