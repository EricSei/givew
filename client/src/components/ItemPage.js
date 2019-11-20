import React from 'react';

const ItemPage = props => {
  console.log(props.location);
  return (
    <div>
      <div>Photos: </div>
      {
        props.location.state.photos.map(photo => {
          return <img src={photo} style={{ width: "150px", height: "auto" }} />
        })
      }
      <div>{props.location.state.name}</div>
      <div>{props.location.state.description}</div>
      <button className="btn">Request Item</button>
    </div>
  );
}

export default ItemPage;