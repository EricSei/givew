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
    <div className="row item-page-container">
      <div className="col s12">
        <div className="row item-page-main">
          <div className="col s12 m6">
            <div className="carousel" onLoad={initCarousel}>
              {
                props.location.state.photos.map(photo => {
                  return <span className="carousel-item"><img src={photo} style={{ width: "15rem", height: "auto" }} /></span>
                })
              }  
            </div>
          </div>
          <div className="col s12 m6 item-info">
            <div>
              <div className="item-page-title">{props.location.state.name}</div>
              <div className="item-page-zip">ZIP {props.location.state.zipcode}</div>
              <div className="item-page-desc">{props.location.state.description}</div>
              <div className="item-page-times">
                <div>Available Timeslots:</div>
                {
                  timeSlots.map(timeSlot => {
                    return (
                      <>
                        <div className="item-page-time">- {moment(timeSlot).format('LLLL')}</div>
                      </>
                    )
                  })
                }
              </div>
              { requestButton }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemPage;