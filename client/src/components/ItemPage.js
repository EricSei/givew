import React from 'react';

import useMaterialize from '../hooks/useMaterialize';

const ItemPage = props => {
  useMaterialize();
  
  return (
    <div>
      <div id="modal1" class="modal">
    <div class="modal-content">
      <h4>Enter a message:</h4>
      <textarea class="materialize-textarea" data-length="120" placeholder="Your message" />
    </div>
    <div class="modal-footer">
      <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
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