import React from 'react';

import useMaterialize from '../hooks/useMaterialize';
import useDonation    from '../hooks/useDonation';
import history        from '../history';

const CreateDonationPage = () => {
  const [handleChange, handleUploadChange, onHandleSubmit, errMsg, dateTimes, addDateTime, handleDateTimeChange, removeDateTime] = useDonation();
  useMaterialize();

  return (
    <div className="row create-form-container">
      {/* Item Details */}
      <div className="col s12 create-form-detail card-panel">
        {/* Header */}
        <div className="row">
          <div className="col s12">
            <div className="create-form-title">Donate An Item</div>
            <div className="create-form-subtitle">Please provide details about the item you are donating.</div>
          </div>
        </div>
        {/* error string placeholder */}
        <div className="red-text">
          { errMsg }
        </div>
        {/* Form */}
        <div className="row">
          <div className="col s12 input-field">
            <input name="name" id="item-name" type="text" onChange={handleChange} />
            <label htmlFor="item-name">Name of Item</label>
          </div>
          <div className="col s12 input-field">
            <textarea name="description" id="item-desc" className="materialize-textarea" data-length="200" onChange={handleChange} />
            <label htmlFor="item-desc" id="item-desc-label">Item Description</label>
          </div>
          <div className="col s12 input-field">
            <select name="category" id="category" onChange={handleChange}>
              <option value="other" disabled selected>Select Category</option>
              <option value="furniture">Furniture</option>
              <option value="electronics">Electronics</option>
              <option value="appliances">Appliances</option>
              <option value="other">Other</option>
            </select>
            <label htmlFor="category">Category</label>
          </div>
          <div className="col s12 input-field file-field">
            <div className="btn">
              <span>Browse</span>
              <input name="photos" id="photos" type="file" multiple onChange={handleUploadChange} />
            </div>
            <div className="file-path-wrapper">
              <input className="file-path validate" type="text" placeholder="Upload photos of your item." />
            </div>
          </div>
        </div>
      </div>
      {/* Pickup Details */}
      <div className="col s12 create-form-detail card-panel">
        {/* Header */}
        <div className="row">
          <div className="col s12">
            <div className="create-form-title">Pickup Details</div>
            <div className="create-form-subtitle">This section contains details of the pickup location.</div>
          </div>
        </div>
        {/* Form */}
        <div className="row">
          <div className="col s12 input-field">
            <input name="location" id="location" type="text" onChange={handleChange} />
            <label htmlFor="location">Street Address</label>
          </div>
          <div className="col s12 input-field">
            <input name="zipcode" id="zip" type="number" onChange={handleChange} />
            <label htmlFor="zip">Zipcode</label>
          </div>
          <div className="col s12">
            {
              dateTimes.map((dateTime, i) => {
                return (
                  <div className="row valign-wrapper">
                    <div className="col s5 input-field">
                      <input id={i} name="date" type="text" className="datepicker" value={dateTime.date} />
                      <label htmlFor={i}>Pick a date</label>
                    </div>
                    <div className="col s5 input-field">
                      <input id={i} name="time" type="text" className="timepicker" value={dateTime.time} />
                      <label htmlFor={i}>Pick a time</label>
                    </div>
                    <div className="col s2 input-field">
                      <div onClick={() => removeDateTime(i)} style={{ cursor: "pointer", color: "#039be5" }}>Remove</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="col s12 input-field">
            <button className="btn" onClick={ () => addDateTime() }>Add More</button>
          </div>
        </div>
      </div>
      {/* Footer Buttons */}
      <div className="col s6 input-field">
        <button className="btn" onClick={() => history.goBack()}>Go Back</button>
      </div>
      <div className="col s6 input-field right-align">
        <button className="btn" onClick={onHandleSubmit}>Submit to Donate Item</button>
      </div>
    </div>
  );
}

export default CreateDonationPage;