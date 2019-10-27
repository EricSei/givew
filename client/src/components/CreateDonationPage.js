import React from 'react';

import useMaterialize from '../hooks/useMaterialize';

const CreateDonationPage = () => {
  useMaterialize();
  return (
    <div className="row create-form-container">
      {/* Item Details */}
      <div className="col s12 create-form-detail card-panel">
        {/* Header */}
        <div className="row">
          <div className="col s12">
            <div className="create-form-title">Item Details</div>
            <div className="create-form-subtitle">This section contains the basic details of your item.</div>
          </div>
        </div>
        {/* Form */}
        <div className="row">
          <div className="col s12 input-field">
            <input id="item-name" type="text" />
            <label htmlFor="item-name">Name of Item</label>
          </div>
          <div className="col s12 input-field">
            <textarea id="item-desc" className="materialize-textarea" data-length="200" />
            <label htmlFor="item-desc" id="item-desc-label">Item Description</label>
          </div>
          <div className="col s12 input-field">
            <select name="category" id="category">
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
              <input type="file" multiple />
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
            <input id="location" type="text" />
            <label htmlFor="location">Street Address</label>
          </div>
          <div className="col s12 input-field">
            <input id="zip" type="number" />
            <label htmlFor="zip">Zipcode</label>
          </div>
        </div>
      </div>
      {/* Footer Buttons */}
      <div className="col s6 input-field">
        <button className="btn">Go Back</button>
      </div>
      <div className="col s6 input-field right-align">
        <button className="btn">Submit to Donate Item</button>
      </div>
    </div>
  );
}

export default CreateDonationPage;