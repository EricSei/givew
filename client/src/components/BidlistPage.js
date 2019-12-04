import React, { useEffect, useState } from 'react';

import backend from '../apis/backend';

const BidlistPage = () => {
  const [items, setItems] = useState([]);

  const fetchBidlist = async () => {
    const res = await backend.get('/donator/bidlist/');
    setItems(res.data);
  }
  console.log(items);
  useEffect(() => {
    fetchBidlist();
  }, []);

  return (
    <div className="row" style={{ height: "100%" }}>
      <div className="col s12 m3" style={{ textAlign: "center", borderRight: "0.5px solid grey", height: "100%", position: "fixed" }}>
        <div>Donated Items</div>
        {
          items.map(item => {
            return (
              <>
                <div style={{ cursor: "pointer", margin: "1rem 0" }}>{item.name}</div>
              </>
            )
          })
        }
      </div>
    </div>
  );
};

export default BidlistPage;