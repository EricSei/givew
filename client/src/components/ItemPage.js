import React, { useContext } from 'react';
import moment from 'moment';

import useMaterialize from '../hooks/useMaterialize';
import AuthContext from '../contexts/AuthContext';
import useItem from '../hooks/useItem';

const ItemPage = props => {
  const { isAuth } = useContext(AuthContext);
  useMaterialize();
  const { handleRequestItem, handleChangeMessage, waitlistable, initCarousel, timeSlots, handleTimeSelect, selectedSlot } = useItem(props.location.state.id);
  
  const requestButton = (
    <div>
      <div id="req-modal" className="modal">
        <div className="modal-content">
          <h4>Enter a message:</h4>
          <textarea className="materialize-textarea" data-length="120" placeholder="Your message" onChange={handleChangeMessage} />
          {
            timeSlots.map(timeSlot => {
              return (
                <p>
                  <label>
                    <input onChange={handleTimeSelect} type="checkbox" value={timeSlot} disabled={ selectedSlot !== null && selectedSlot !== timeSlot? "disabled" : "" } />
                    <span>{moment(timeSlot).format('LLLL')}</span>
                  </label>
                </p>
              )
            })
          }
        </div>
        <div className="modal-footer">
          <div 
            style = {{ cursor : 'pointer' }} 
            className="modal-close waves-effect waves-green btn-flat"
            onClick = {e => handleRequestItem(e, props.location.state.id)}
          >
            Submit
          </div>
        </div>
      </div>
      <button className={`btn modal-trigger ${isAuth && waitlistable? "able" : "disabled"}`} data-target="req-modal">Request Item</button>
    </div>
  );
  
  return (
    <div>
      <div>Photos: </div>
      <div className="carousel" onLoad={initCarousel}>
        {
          props.location.state.photos.map(photo => {
            return <span className="carousel-item"><img src={photo} style={{ width: "150px", height: "auto" }} /></span>
          })
        }  
      </div>
      <div>{props.location.state.name}</div>
      <div>{props.location.state.description}</div>
      <div>
        {
          timeSlots.map(timeSlot => {
            return (
              <>
                <div>{moment(timeSlot).format('LLLL')}</div>
              </>
            )
          })
        }
      </div>
      { requestButton }
    </div>
  );
}

export default ItemPage;