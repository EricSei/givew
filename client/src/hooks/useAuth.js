import { useContext, useEffect } from 'react';

import AuthContext from '../contexts/AuthContext';

export default () => {
  const { setToken } = useContext(AuthContext);
  useEffect(() => setToken(localStorage.getItem('token')), []);
}