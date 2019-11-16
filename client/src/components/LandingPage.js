import React from 'react';
import useItems from '../hooks/useItems'


const Landing = () => {
  let [items] = useItems(); // items is an array of items that will be rendered 
  
  return (
    <div>
      {
        items.map(item => {
          return (
            <div>
              <div>{item.name}</div>
              <img src={item.photos[0]} style={{ width: "150px", height: "auto" }} />
            </div>
          )
        })
      }
    </div>
  );
};

export default Landing;