import React from 'react'
import PropTypes from 'prop-types'




export default function Navbar(props) {
  return (

  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-hrefggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auhref mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        </ul>
         
        
      
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.hrefggleSwitch} type="checkbox" id="flexSwitchCheckDefault"/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
         </div>
    </div>
  </div>
</nav>
  )
  
}
Navbar.propTypes = {title:PropTypes.string.isRequired};

Navbar.defaultProps = {
  title : "textutills"
}