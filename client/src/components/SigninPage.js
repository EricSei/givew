import React from 'react';

import GoogleIcon from '../assets/logos/google-icon.png'

const SigninPage = () => {
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
                <span>Don't have an account?</span>
                <button className="btn create-btn">Create an Account</button>
              </div>
            </div>
          </div>
          {/* Title */}
          <div className="row form-container">
            <div className="col s12">
              <div className="form-title">Sign in to givew</div>
            </div>
            <div className="col s12">
              <div className="form-subtitle">Enter your details below</div>
            </div>
            {/* Form */}
            <div className="row input-container">
              <div className="input-field col s12">
                <input type="text" id="email" name="email" />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input type="password" id="password" name="password" />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <button className="btn form-btn">Sign in</button>
              </div>
            </div>
            {/* Open Authorization Options */}
            <div className="row input-container">
              <div className="col s12">
                <div className="oauth-title">Or sign in using</div>
                <button className="btn form-btn facebook-btn">
                  <i class="fab fa-facebook-f" />
                  Sign in with Facebook
                </button>
                <button className="btn form-btn google-btn">
                  <img src={GoogleIcon} width="25px" className="google-icon" />
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SigninPage;