import { useState } from 'react';

import backend from '../apis/backend';

export default () => {
  const [form, setForm] = useState({ email: '', password: '' });
  
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = () => {
    backend.post('/user/signin', form);
  }

  return [handleChange, handleSubmit, form];
}