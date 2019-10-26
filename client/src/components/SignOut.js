import React, { Component } from 'react';
import history from '../history';

class Signout extends Component {
  componentDidMount(){
    localStorage.removeItem('token');
    history.push('/');
  }
  render() {
    return (
      <div>
        <div>Signing Out...</div>
      </div>
    );
  }
}


export default Signout;