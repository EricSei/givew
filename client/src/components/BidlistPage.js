import React, { useEffect, useState } from 'react';
import moment from 'moment';

import backend from '../apis/backend';

const BidlistPage = () => {
  const [items, setItems] = useState([]);
  const [messages, setMessages] = useState(null);
  const [selected, setSelected] = useState(null);
  
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
              <div className="row message-container">
                <div className="col s12 m10">
                  <div className="message-title">Message:</div>
                  <div className="message-content">{ message.message }</div>
                  <div className="time-title">Selected Time:</div>
                  <div className="time-content">{ moment(message.time).format('LLLL') }</div>
                </div>
                <div className="col s12 m2">
                  <button className="btn bid-button teal lighten-2" onClick={() => acceptMessage(message.itemId, message.receiverId, message.time)}>Approve</button>
                  <button className="btn bid-button red accent-1" onClick={() => declineMessage(message.itemId, message.receiverId)}>Decline</button>
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
      <div className="col s12 m3" style={{ textAlign: "center", borderRight: "1px solid #F2F2F2", height: "100%" }}>
        <div id="bidlist-title">Your Donations:</div>
        {
          items.map(item => {
            return (
              <>
                <div onClick={() => { fetchMessage(item.id); setSelected(item.name); }} className={`donated-item-title ${item.name === selected? "donated-item-title-selected" : null}`}>{item.name}</div>
              </>
            )
          })
        }
      </div>
      {/* Show Message */}
      <div className="col s12 m9 message-column">
        {renderMessages()}
      </div>
    </div>
  );
};

export default BidlistPage;