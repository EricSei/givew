import React from 'react';
import useItems from '../hooks/useItems'

const Landing = () => {
  let [items] = useItems(); // items is an array of items that will be rendered 
  console.log(items); // Logging items development & debugging purposes, to be removed later on
  return (
    <div>
      Landing Page
    </div>
  );
};

export default Landing;