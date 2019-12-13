import React, { useContext } from 'react'
import { useEffect, useState } from 'react';
import useMaterialize from '../hooks/useMaterialize';
import AuthContext from '../contexts/AuthContext';
import UserContext from '../contexts/UserContext'
import backend from '../apis/backend';
import history from '../history';



const Profile = () => {

  useMaterialize();
  const { isAuth } = useContext(AuthContext);
  const [isEdit, setIsEdit] = useState(false);
  const { user } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [form, setForm] = useState({ username: '' });

  useEffect(() => {
    backend.get('/user')
      .then(res => {
        console.log(res.data)
        setUsername(res.data.username);
        setEmail(res.data.email);
      })
      .catch(err => {
        console.error(err.message);

      });
  }, [user, isEdit]);

  const handleEdit = async () => {
    setIsEdit(true);

  }

  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    // const res = await backend.put('/');
    // setUsername(res.data.username);
    // setEmail(res.data.email);
    //e.preventDefault();
    await backend.put('/user/', form);
    //setEdit
    history.push('/profile');
  }

  return !isEdit ? (
    <div>
      Profile Page !
      <ul>
        <li>{username}</li>
        <li>{email}</li>
        <li>
          <button onClick={() => handleEdit()} >
            Edit
          </button>
        </li>
      </ul>
    </div>
  ) :
    (
      <div className="row input-container">
        <form onSubmit={handleSubmit}>
          <div className="input-field col s12">
            <input type="text" id="username" name="username" onChange={handleChange} />
            <label htmlFor="name">{username}</label>
          </div>
          <div className="input-field col s12">
            <input type="text" id="email" name="email" onChange={handleChange} />
            <label htmlFor="email">{email}</label>
          </div>
          <div className="input-field col s12">
            <input className="btn form-btn" type="submit" value="Update" />
          </div>
          {/* <div className="input-field col s12">
            <input type="password" id="password" name="password" onChange={handleChange} />
            <label htmlFor="password">Password</label>
          </div> */}
        </form>
      </div>
    );
}

export default Profile
