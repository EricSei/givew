import { useState, useContext } from 'react';

import backend     from '../apis/backend';
import history     from '../history';
import AuthContext from '../contexts/AuthContext';

export default () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const { setIsAuth }   = useContext(AuthContext);
  
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value});
  
  const handleSubmit = async () => {
    await backend.post('/auth/signup', form);
    setIsAuth(true);
    history.push('/');
  }

  return [handleChange, handleSubmit, form]
}