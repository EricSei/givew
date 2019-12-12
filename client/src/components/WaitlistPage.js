import React, { useEffect, useState } from 'react';

import backend from '../apis/backend';

const WaitlistPage = () => {
  const [waitlist, setWaitlist] = useState([]);

  useEffect(() => {
    backend.get('/receiver/waitlist/')
      .then(res => setWaitlist(res.data));
  } , []);

  return (
    <div>
      <div>My Waitlist</div>
      <div>These are all the items that I've requested.</div>
      {
        !waitlist.length
          ? <div>None</div>
          : waitlist.map(item => {
              return (
                <div>{item.id}, {item.message}</div>
              )
            })
      }
    </div>
  );
};

export default WaitlistPage;