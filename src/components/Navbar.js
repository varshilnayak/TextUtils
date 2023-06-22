//rfc to create react functional component
import React from "react";
//impt to import proptypes
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  {props.home}      {/*syntax for accessing props*/}
                </a>
              </li>  
            </ul>
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'dark':'light'} mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

//prop types check if the passed data type is correct or not
Navbar.propTypes={
    title : PropTypes.string.isRequired,           //pts  //if default props is not set & we mark propTypes.string.isRequired 
    home : PropTypes.string,                   //& dont pass prop then it shows error
}
//we can set default props if no prop is passed
Navbar.defaultProps={
    title: 'Set Title'
}
