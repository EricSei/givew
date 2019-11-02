import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import useMaterialize from '../hooks/useMaterialize';
import AuthContext    from '../contexts/AuthContext';
import UserContext    from '../contexts/UserContext'

const Navbar = () => {
  useMaterialize();
  const { isAuth } = useContext(AuthContext);
  const { user }   = useContext(UserContext);

  return isAuth
    ? (
      <div>
        {/* Dropdown Options */}
        <ul id="user-dropdown" className="dropdown-content">
					<li><Link to="/profile" className="quarter-bigger">Profile</Link></li>
          <li><Link to="/donate/create" className="quarter-bigger">Create Donation</Link></li>
          <li><Link to="/items/reserved" className="quarter-bigger">Reserved Items</Link></li>
          <li><Link to="/items/donated" className="quarter-bigger">Donated Items</Link></li>                
        </ul>
        {/* Main Navbar */}
        <nav>
          <div className="nav-wrapper">
            <Link to='/' className="brand-logo">Givew</Link>
            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <div className="">
              <ul className="right hide-on-med-and-down">
                <li className=""><Link to="/profile" className="quarter-bigger dropdown-trigger" data-target="user-dropdown">
									{user.username}<i className="material-icons right">arrow_drop_down</i>
								</Link></li>
                <li className=""><Link to="/signout" className="quarter-bigger">Sign Out</Link></li>
              </ul>
            </div> 
          </div>
        </nav>
        {/* Mobile Sidemenu */}
        <ul className="sidenav" id="mobile-demo">
          <li className=""><Link to="/profile" className="">Profile</Link></li>
          <li><Link to="/donate/create" className="">Create Donation</Link></li>
          <li><Link to="/items/reserved" className="">Reserved Items</Link></li>
          <li><Link to="/items/donated" className="">Donated Items</Link></li>
          <li className=""><Link to="/signout" className="">Sign Out</Link></li>
        </ul>
      </div>
    ) 
    : (
      <nav>
        <div className="nav-wrapper">
          <Link to='/' className="brand-logo">Givew</Link>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
          <div className="">
            <ul className="right hide-on-med-and-down">
              <li className=""><Link to="/signup" className="quarter-bigger">Sign Up</Link></li>
              <li className=""><Link to="/signin" className="quarter-bigger">Sign In</Link></li>
            </ul>
          </div> 
        </div>
      </nav>
    );
}


export default Navbar;