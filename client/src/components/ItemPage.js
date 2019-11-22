import React from 'react';

import useMaterialize from '../hooks/useMaterialize';
import useItem from '../hooks/useItem';


const ItemPage = props => {
  useMaterialize();
  console.log(props);
  const [handleRequestItem, handleChangeMessage] = useItem();
  
  return (
    <div>
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>Enter a message:</h4>
          <textarea className="materialize-textarea" data-length="120" placeholder="Your message" onChange={handleChangeMessage} />
        </div>
        <div className="modal-footer">
          <div 
            style = {{cursor : 'pointer'}} 
            className="modal-close waves-effect waves-green btn-flat" 
            onClick = {e => handleRequestItem(e, props.location.state.id)}
          >
            Agree
          </div>
        </div>
      </div>
      <div>Photos: </div>
      {
        props.location.state.photos.map(photo => {
          return <img src={photo} style={{ width: "150px", height: "auto" }} />
        })
      }
      <div>{props.location.state.name}</div>
      <div>{props.location.state.description}</div>
      <button className="btn modal-trigger" data-target="modal1">Request Item</button>
    </div>
  );
}

export default ItemPage;