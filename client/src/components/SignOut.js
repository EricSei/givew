import React, { Component } from 'react';
import history from '../history';

class Signout extends Component {
  componentDidMount(){
    localStorage.setItem('token', '');
    history.push('/');
  }
  render() {
    return (
      <div>
        <h1>Signing Out...</h1>
      </div>
    );
  }
}


export default Signout;