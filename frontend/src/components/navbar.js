import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
            <img src={require("../assets/SnapShoppersLogo.png")} height = '100px' width = '100px' alt="SnapShopper"></img>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item align-bottom">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="nav-link" to='/categories'>Categories</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/upload">
                            <i className="fas fa-camera fa-5x"></i>
                        </Link>
                    </li>

                    <li>
                        <Link className="nav-link" to='/signup'>Sign Up</Link>
                    </li>
                    <li> 
                        <Link className="nav-link" to='/tags'>Tags</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;