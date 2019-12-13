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
    <div>
      <div>Dropoff List Page</div>
      <div>
        {
          dropOffs.map(item => {
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

export default DropoffListPage;