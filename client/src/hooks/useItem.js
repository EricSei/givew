import { useEffect, useState } from 'react';

import backend from '../apis/backend';
import history from '../history';
import M from "materialize-css";

export default itemId => {
  const [itemReqMessage, setItemReqMessage] = useState('');
  const [waitlistable, setWaitlistable] = useState(false);

  useEffect(() => {
    backend.get(`/receiver/waitlist/waitlistable/item/${itemId}`)
    .then(res => {
      setWaitlistable(res.data.waitlistable);
    })
    .catch(err => {
      console.error(err.message);
      console.error(err.stack);
    });
  }, []);

  const handleChangeMessage = e => {
    setItemReqMessage(e.target.value);
  }

  const handleRequestItem = (e, itemId) => {
    backend.post('/receiver/waitlist/create', {itemId, message : itemReqMessage})
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

  return {handleRequestItem, handleChangeMessage, itemReqMessage, waitlistable, initCarousel}; 
}