import { useState } from 'react';

export default () => {
  const [form, setForm] = useState({ name: '', desc: '', category: '', photos: null, location: '', zipcode: null });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const handleUploadChange = e => {
    const photos = document.querySelector('#photos');
    setForm({ ...form, photos: photos.files });
  }

  return [handleChange, handleUploadChange, form];
}