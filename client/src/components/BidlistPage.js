import React, { useEffect, useState } from 'react';
import moment from 'moment';

import backend from '../apis/backend';

const BidlistPage = () => {
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState(null);
  
  const fetchBidlist = async () => {
    const res = await backend.get('/donator/bidlist/');
    setItems(res.data);
  }

  const fetchMessage = async itemId => {
    const res = await backend.get(`/donator/bidlist/item/${itemId}`);
    setMessages(res.data);
  }

  const declineMessage = async (itemId, receiverId) => {
    await backend.put(`/donator/bidlist/item/decline/${itemId}`, { receiverId: receiverId });
    fetchMessage(itemId);
  }

  const acceptMessage = async (itemId, receiverId, time) => {
    await backend.put(`/donator/bidlist/item/accept/${itemId}`, { receiverId: receiverId, time: time });
  }

  const renderMessages = () => {
    if (!messages) return <div>Select an item to show messages.</div>;
    
    switch(messages.length) {
      case 0:
        return <div>There are no bidders for this item yet.</div>;
      default:
        return (
          messages.map(message => {
            return (
              <div className="row">
                <div className="col s12 m10">
                  <div>{ message.message }</div>
                  <div>Selected Time: { moment(message.time).format('LLLL') }</div>
                </div>
                <div className="col s12 m2">
                  <button className="btn" onClick={() => acceptMessage(message.itemId, message.receiverId, message.time)}>Approve</button>
                  <button className="btn" onClick={() => declineMessage(message.itemId, message.receiverId)}>Decline</button>
                </div>
              </div>
            )
          })
        );
    }
  }

  useEffect(() => {
    fetchBidlist();
  }, []);

  return (
    <div className="row" style={{ height: "100vh" }}>
      {/* Sidebar */}
      <div className="col s12 m3" style={{ textAlign: "center", borderRight: "0.5px solid grey", height: "100%" }}>
        <div>Donated Items</div>
        {
          items.map(item => {
            return (
              <>
                <div onClick={() => fetchMessage(item.id)} style={{ cursor: "pointer", margin: "1rem 0" }}>{item.name}</div>
              </>
            )
          })
        }
      </div>
      {/* Show Message */}
      <div className="col s12 m9">
        {renderMessages()}
      </div>
    </div>
  );
};

export default BidlistPage;