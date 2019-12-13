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
    <div className="waitlist-container">
      <div id="waitlist-title">Pickup List</div>
      {/* <div>These items are for you to pick up at the location and time.</div> */}
      <table className="highlight card">
        <thead>
          <tr>
            <th>Item</th>
            <th>Location</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {
            pickups.map(item => {
              return (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.location}, {item.zipcode}</td>
                  <td>{moment(item.timeSlots[0]).format('LLLL')}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default PickupListPage;