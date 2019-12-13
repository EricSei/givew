import React, { useEffect, useState } from 'react';

import backend from '../apis/backend';
import moment from 'moment';

const DropoffListPage = () => {
  const [dropOffs, setDropOffs] = useState([]);

  useEffect(() => {
    fetchDropOffs();
  }, []);

  const fetchDropOffs = async () => {
    const response = await backend.get('/donator/dropofflist/');
    setDropOffs(response.data);
  }

  return (
    <div className="waitlist-container">
      <div id="waitlist-title">Dropoff List</div>
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
            dropOffs.map(item => {
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

export default DropoffListPage;