import React from 'react';
import {Link, HashRouter} from 'react-router-dom';

const Header = (props) => {
return(
    <HashRouter>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">Snap Shoppers</Link>
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/">Feed</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/upload">Upload Coupon</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Sign Up</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/upload">Login</Link>
      </li> */}
    </ul>
  </nav>        
    </HashRouter>

)
}
export default Header;