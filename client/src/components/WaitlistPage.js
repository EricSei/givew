import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import backend from '../apis/backend';

const WaitlistPage = () => {
  const [waitlist, setWaitlist] = useState([]);

  useEffect(() => {
    backend.get('/receiver/waitlist/')
      .then(res => setWaitlist(res.data));
  } , []);

  return (
    <div className="waitlist-container">
      <div id="waitlist-title">My Waitlist</div>
      <table className="highlight card">
        <thead>
          <tr>
            <th>Item</th>
            <th>Selected Time</th>
            <th>My Message</th>
          </tr>
        </thead>
        <tbody>
          {
            !waitlist.length
              ? null
              : waitlist.map(item => {
                  return (
                    <tr>
                      <td className="td-item-name">
                        <Link to={{ pathname: '/item', state: item.item }}>
                          <div id="td-item-name">{item.item.name}</div>
                        </Link>
                      </td>
                      <td>{moment(item.time).format('LLLL')}</td>
                      <td>{item.message}</td>
                    </tr>
                  )
                })
          }
        </tbody>
      </table>
    </div>
  );
};

export default WaitlistPage;