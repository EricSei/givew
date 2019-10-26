import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from "materialize-css/dist/js/materialize.min.js";

class Navbar extends Component {
    componentDidMount() {
        let elem = document.querySelector(".sidenav");
        let instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        let navContents = null;
        if(localStorage.getItem('token')) {
            navContents = (
                <div>
                    <nav>
                        <div className="nav-wrapper">
                            <Link to='/' className="brand-logo">Givew</Link>
                            <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                            <div className="">
                                <ul className="right hide-on-med-and-down">
                                    <li className="">
                                        <Link to="/profile" className="quarter-bigger">Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/donate/create" className="quarter-bigger">Create Donation</Link>
                                    </li>
                                    <li>
                                        <Link to="/items/reserved" className="quarter-bigger">Reserved Items</Link>
                                    </li>
                                    <li>
                                        <Link to="/items/donated" className="quarter-bigger">Donated Items</Link>
                                    </li>
                                    <li className="">
                                        <Link to="/signout" className="quarter-bigger">Sign Out</Link>
                                    </li>
                                </ul>
                            </div> 
                        </div>
                    </nav>
                    <ul className="sidenav" id="mobile-demo">
                        <li className="">
                            <Link to="/profile" className="">Profile</Link>
                        </li>
                        <li className="">
                            <Link to="/signout" className="">Sign Out</Link>
                        </li>
                        <li>
                            <Link to="/donate/create" className="">Create Donation</Link>
                        </li>
                        <li>
                            <Link to="/items/reserved" className="">Reserved Items</Link>
                        </li>
                        <li>
                            <Link to="/items/donated" className="">Donated Items</Link>
                        </li>
                    </ul>
                </div>    
            );
        }
        return navContents;
    }    
}


export default Navbar;