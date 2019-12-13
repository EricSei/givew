import React from 'react';
import { Link } from 'react-router-dom';

import useItems from '../hooks/useItems'

const Landing = () => {
  let [items] = useItems();
  
  return (
    <div className="landing-container">
      <div className="row" style={{ margin: 0 }}>
        <div className="col s12 m12 category-bar">
          <div className="category selected">Latest</div>
          <div className="category">Furnitures</div>
          <div className="category">Electronics</div>
          <div className="category">Appliances</div>
          <div className="category">Others</div>
        </div>
      </div>
      <div className="row main">
        {
          items.map(item => {
            return (
              <div className="col s12 m4 center item-container">
                <Link key={item.id} to={{ pathname: '/item', state: item }}>
                  <img src={item.photos[0]} style={{ width: "12rem", height: "auto" }} />
                  <div className="item-name">{item.name}</div>
                  <div className="item-zipcode">ZIP {item.zipcode}</div>
                </Link>
              </div>
            )
          })
        }
      </div>
      
    </div>
  );
};

export default Landing;