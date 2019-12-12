import { useContext, useEffect } from 'react';

import backend     from '../apis/backend';
import AuthContext from '../contexts/AuthContext';
import UserContext from '../contexts/UserContext';

export default async () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    if (isAuth) {
      backend.get('/user/')
        .then(res => { setUser({ ...user, username: res.data.username }) })
        .catch(err => { setUser({ ...user, username: '' }) });
    }
  }, [isAuth]);

  try {
    await backend('/application-configuration');
    setIsAuth(true);
  } catch (e) {
    setIsAuth(false);
  }
}