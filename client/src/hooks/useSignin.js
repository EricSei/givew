import { useState, useContext } from 'react';

import backend     from '../apis/backend';
import history     from '../history';
import AuthContext from '../contexts/AuthContext';

export default () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { setToken }    = useContext(AuthContext);
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async () => {
    const res = await backend.post('/user/signin', form);
    setToken(res.data.token);
    localStorage.setItem('token', res.data.token);
    history.push('/');
  }

  return [handleChange, handleSubmit, form];
}