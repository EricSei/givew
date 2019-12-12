import React from 'react';
import { Link } from 'react-router-dom';

import useItems from '../hooks/useItems'

const Landing = () => {
  let [items] = useItems();
  
  return (
    <div>
      {
        items.map(item => {
          return (
            <Link key={item.id} to={{ pathname: '/item', state: item }}>
              <div>{item.name}</div>
              <img src={item.photos[0]} style={{ width: "150px", height: "auto" }} />
            </Link>
          )
        })
      }
    </div>
  );
};

export default Landing;