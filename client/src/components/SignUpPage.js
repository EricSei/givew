import React    from 'react';
import { Link } from 'react-router-dom';

import GoogleIcon from '../assets/logos/google-icon.png';
import useSignup  from '../hooks/useSignup';

const SignUpPage = () => {
  const [handleChange, handleSubmit] = useSignup();

  return (
    <>
      <div className="row fullscreen-container">
        <div className="col s6 slide-col">
          <div className="side-bg-left"></div>
        </div>
        <div className="col s6 form-col">
          {/* Top-Right Corner */}
          <div className="row">
            <div className="col s12 right-align">
              <div className="corner-container">
                <span>Already Registered?</span>
                <Link to="/signin" className="btn create-btn">Login Instead</Link>
              </div>
            </div>
          </div>
          {/* Title */}
          <div className="row form-container">
            <div className="col s12">
              <div className="form-title">Create an account for givew</div>
            </div>
            <div className="col s12">
              <div className="form-subtitle">Enter your details below</div>
            </div>
            {/* Form */}
            <div className="row input-container">
              <div className="input-field col s12">
                <input type="text" id="username" name="username" onChange={handleChange} />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field col s12">
                <input type="text" id="email" name="email" onChange={handleChange} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input type="password" id="password" name="password" onChange={handleChange} />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <button className="btn form-btn" onClick={handleSubmit}>Sign Up</button>
              </div>
            </div>
            {/* Open Authorization Options */}
            <div className="row input-container">
              <div className="col s12">
                <div className="oauth-title">Or sign up using</div>
                <button className="btn form-btn facebook-btn">
                  <i class="fab fa-facebook-f" />
                  Sign up with Facebook
                                </button>
                <button className="btn form-btn google-btn">
                  <img src={GoogleIcon} width="25px" className="google-icon" />
                  Sign up with Google
                                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;