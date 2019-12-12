import { useEffect, useState } from 'react';

import backend from '../apis/backend';
import history from '../history';
import M from "materialize-css";

export default itemId => {
  const [itemReqMessage, setItemReqMessage] = useState('');
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [waitlistable, setWaitlistable] = useState(false);
  const [timeSlots, setTimeSlots] = useState([]);
  
  useEffect(() => {
    backend.get(`/receiver/waitlist/waitlistable/item/${itemId}`)
    .then(res => {
      setWaitlistable(res.data.waitlistable);
      setTimeSlots(res.data.item.timeSlots);
    })
    .catch(err => {
      console.error(err.message);
      console.error(err.stack);
    });
  }, []);

  const handleChangeMessage = e => {
    setItemReqMessage(e.target.value);
  }

  const handleTimeSelect = e => {
    e.target.checked
      ? setSelectedSlot(e.target.value)
      : setSelectedSlot(null);
  }

  const handleRequestItem = (e, itemId) => {
    backend.post('/receiver/waitlist/create', { itemId, message : itemReqMessage, selectedSlot })
      .then( result => {
        history.push('/items/waitlist');
      })
      .catch(error => {
        console.error(error.toString());
      });
  }

  const initCarousel = e => {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, { 
      indicators: true
    });
  }

  return {handleRequestItem, handleChangeMessage, itemReqMessage, waitlistable, initCarousel, timeSlots, handleTimeSelect, selectedSlot}; 
}