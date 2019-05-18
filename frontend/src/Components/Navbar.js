import React from 'react';
import { Link } from 'react-router-dom';

import '../Navbar.css'

// import Camera from './Camera';

const Navbar = () => {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">SnapShopper</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item align-bottom">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/upload">
                            <i className="fas fa-camera fa-5x"></i>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/categories">Categories</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;




// <nav className="navbar navbar-expand-lg navbar-light bg-light nav-justified">
        //     <Link className="navbar-brand" to="#">SnapShopper</Link>
        //     <button
        //         className="navbar-toggler"
        //         type="button"
        //         data-toggle="collapse"
        //         data-target="#navbarNavDropdown"
        //         aria-controls="navbarNavDropdown"
        //         aria-expanded="false" aria-label="Toggle navigation"
        //     >
        //         <span className="navbar-toggler-icon"></span>
        //     </button>
        //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
        //         <ul className="navbar-nav ">
        //             <li className="nav-item active">
        //                 <Link className="nav-link" to="#">Home</Link>
        //             </li>

        //             <li>
        //                 {/* <Link to={Camera}> */}
        //                 
        //                 {/* </Link> */}
        //             </li>

        //             <li className="nav-item">
        //                 <Link className="nav-link" to="#">Categories</Link>
        //             </li>

        //         </ul>
        //     </div>
        // </nav>