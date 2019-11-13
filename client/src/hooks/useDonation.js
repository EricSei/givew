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
    let formData = new FormData();
    for (let photo of form.photos) {
      formData.append('photos', photo);
    }
    formData.append('name', form.name);
    formData.append('description', form.description);
    formData.append('category', form.category);
    formData.append('location', form.location);
    formData.append('zipcode', form.zipcode);

    backend.post('/item/create', formData)
    .then( res => {
      history.push('/items/donated');
    })
    .catch(err => {
      setErrMsg('Invalid input, please try again!')
    })
  }

  return [handleChange, handleUploadChange, onHandleSubmit, errMsg, form];
}