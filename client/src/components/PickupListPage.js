import React, { useState, useEffect } from 'react';
import moment from 'moment';

import backend from '../apis/backend';

const PickupListPage = () => {
  const [pickups, setPickups] = useState([]);
  
  useEffect(() => {
    fetchPickups();
  }, []);

  const fetchPickups = async () => {
    const response = await backend.get('/receiver/pickuplist/');
    setPickups(response.data);
  }

  return (
    <div>
      <div>Pickup List</div>
      <div>These items are for you to pick up at scheduled time.</div>
      <div>
        {
          pickups.map(item => {
            return (
              <div>
                <div>{item.name}</div>
                <div>{item.description}</div>
                <div>{item.location}, {item.zipcode}</div>
                <div>{moment(item.timeSlots[0]).format('LLLL')}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
};

export default PickupListPage;