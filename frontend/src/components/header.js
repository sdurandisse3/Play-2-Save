import React from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../contexts/auth';
import './navbar.css';


const Header = (props) => {
return(
<AuthContext.Consumer>
            {
              (user) => {
                if (user) {
                  return (    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
           <img src={require("../assets/SnapShoppersLogo.png")} height = '100px' width = '100px' alt="SnapShopper"></img>
           </Link>
    {/* <ul className="navbar-nav">  
      <li className="nav-item"> */}
      <ul className="navbar-nav m-auto">
                    <li className="nav-item align-bottom">
        <Link className="nav-link" to="/camera">Camera</Link>
      </li> 
      
      {/* <Link to ="/Home" img src ='SnapShoppersLogo.png'></Link> */}

      <li className="nav-item">
        <Link className="nav-link" to="/feed">Feed</Link>
      </li>
      {/* <li className="nav-item">
        <Link className="nav-link" to="/upload">Upload Coupon</Link>
      </li> */}
      <Link className="nav-link" to="/upload">
                           <i className="fas fa-camera fa-5x"></i>
                       </Link>
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
}
export default Header;