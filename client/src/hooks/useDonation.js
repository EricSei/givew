import { useState } from 'react';
import backend from '../apis/backend';
import history     from '../history';

export default () => {
  const [form, setForm] = useState({ name: '', description: '', category: '', photos: null, location: '', zipcode: null });
  const [errMsg, setErrMsg] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const handleUploadChange = e => {
    const photos = document.querySelector('#photos');
    setForm({ ...form, photos: photos.files });
  }

  const onHandleSubmit = e => {
    backend.post('/item/create', form)
    .then( res => {
      history.push('/items/donated');
    })
    .catch(err => {
      console.error(err);
      setErrMsg('Invalid input, please try again!')
    })
  }

  return [handleChange, handleUploadChange, onHandleSubmit, errMsg, form];
}