import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../contexts/AuthContext';
import history     from '../history';
import selectMaterialize from '../hooks/slectMaterialize';

const CreateDonation = props => {
  selectMaterialize();
  // Bottom 2 lines could be own helper function
  const { token } = useContext(AuthContext);
  if(! token ) history.push('/');

  /* 
  categories are an array of category names that will be extracted using ajax and 
  will later be mapped as option JSX elements
  */
  const [categories, setCategories] = useState([]); 
  const [files, setFiles] = useState([]); 

  const onAddFile = e => { // setFiles not updating please help
    let newFilesList = files.slice();
    for(let file of e.target.files){
      newFilesList.push(file)
    }
    console.log(newFilesList);
    setFiles(newFilesList);
    console.log(files);
  }

  const handleSubmit = e => {
  }

  return (
    <div className="row fullscreen-container">
      <div className="col s3 slide-col">
        <div className="side-fill" style={{height: "120%"}}></div>
      </div>
      <div className="col s6 form-col">
        <div className="row form-container">
          <div className="col s12">
            <div className="form-title">Create Donation</div>
          </div>
          <div className="col s12">
            <div className="form-subtitle">Enter your details below</div>
          </div>
          <div className="row input-container">
            <div className="input-field col s12">
              <label htmlFor="name">Item Name</label>
              <input name = "name" id="name" type="text" onChange={e => e} required></input>  
            </div>
            <div className="col s12">         
              <label htmlFor= "photos">Select images:</label> 
                <input name = "photos" id="photos" type="file" onChange={onAddFile} multiple />
                <br></br>
                <br></br>
            </div>
            <div className="input-field col s12">
              <label htmlFor="description">Description</label>
              <textarea rows="10" cols="33" name = "description" className="materialize-textarea" id="description" onChange={e => e} />  
            </div> 
            <div className="input-field col s12">
              <label htmlFor="zipCode" required>Zip Code</label>
              <input name = "zipCode" id="zipCode" type="text" onChange={e => e}></input>  
            </div> 
            <div className="input-field col s12">
              <label htmlFor="location">Location (Could be any location info like address)</label>
              <input name = "location" id="location" type="text" onChange={e => e}></input>  
            </div> 
            <div className="input-field col s12">
              <select name="category" id="category">
                {/*categories*/}
                {/* will uncomment statement above and comment options below later */}
                <option value="other" disabled>Select Category</option>
                <option value="furniture">Furniture</option>
                <option value="electronics">Electronics</option>
                <option value="appliances">Appliances</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="category">Category</label>
            </div> 
            <div className="input-field col s12">
              <button className="btn waves-effect waves-light" type="submit" name="action" onClick = {handleSubmit}>Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col s3 slide-col">
        <div className="side-fill" style={{height: "120%"}}></div>
      </div>
    </div>
  );
};

export default CreateDonation;