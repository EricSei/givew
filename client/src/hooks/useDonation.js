import { useState, useEffect } from 'react';
import backend from '../apis/backend';
import history     from '../history';

import M from "materialize-css/dist/js/materialize.min.js";

export default () => {
  const [form, setForm] = useState({ name: '', description: '', category: '', photos: null, location: '', zipcode: null });
  const [errMsg, setErrMsg] = useState('');
  const [dateTimes, setDateTimes] = useState([{ date: null, time: null }]);
  
  useEffect(() => {
    const datepickers = document.querySelectorAll(".datepicker");
    const timepickers = document.querySelectorAll(".timepicker");
    M.Datepicker.init(datepickers, { onClose: () => datepickers.forEach(e => handleDateTimeChange(e) )});
    M.Timepicker.init(timepickers, { onCloseEnd: () => timepickers.forEach(e => handleDateTimeChange(e) )});
  }, [dateTimes]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  
  const handleUploadChange = e => {
    const photos = document.querySelector('#photos');
    setForm({ ...form, photos: photos.files });
  }

  const handleDateTimeChange = e => {
    const newDateTimes = [ ...dateTimes ];
    newDateTimes[e.id][e.name] = e.value;
    setDateTimes(newDateTimes);
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
    formData.append('dateTimes', dateTimes.map(dateTime => new Date(dateTime.date + ' ' + dateTime.time)));

    backend.post('/item/create', formData)
    .then(res => {
      history.push('/');
    })
    .catch(err => {
      setErrMsg('Invalid input, please try again!')
    })
  }

  const addDateTime = () => {
    setDateTimes([...dateTimes, { date: null, time: null }]);
  }

  const removeDateTime = i => {
    setDateTimes(dateTimes.filter((dateTime, idx) => idx !== i));
  }

  return [handleChange, handleUploadChange, onHandleSubmit, errMsg, dateTimes, addDateTime, handleDateTimeChange, removeDateTime];
}