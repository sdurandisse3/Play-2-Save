import React from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/auth';
import logo from '../assets/SnapShoppersLogo.png';
import './header.css';

const Header = (props) => {
  return (
    <AuthContext.Consumer>
      {
        (user) => {
          if (user) {
            return (
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="Snap Shoppers" width="100" className="d-inline-block align-top" />
                </Link>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/feed">Feed</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/camera">
                      <i className="fas fa-camera fa-2x"></i>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/tags">Tags</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                  </li>
                </ul>
              </nav>
            )
          } else {
            return (
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Snap Shoppers</Link>
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                  </li>
                </ul>
              </nav>
            )
          }
        }
      }
    </AuthContext.Consumer>
  )
};

export default Header;