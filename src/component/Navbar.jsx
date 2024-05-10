import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Text">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.About}</Link>
              {/* <Link to="/about">About</Link> */}
            </li>
            {/* <div className="d-flex">
              <div className="bg-primary rounded my-2 mx-2" onClick={()=>{props.toggleMode("primary")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
              <div className="bg-danger rounded my-2 mx-2" onClick={()=>{props.toggleMode("danger")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
              <div className="bg-success rounded my-2 mx-2" onClick={()=>{props.toggleMode("success")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
              <div className="bg-warning rounded my-2 mx-2" onClick={()=>{props.toggleMode("warning")}} style={{height:"20px",width:"20px",cursor:"pointer"}}></div>
            </div> */}
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-2`}>
              <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable</label>
            </div>
          </ul>
          
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-warning" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

Navbar.proptypes = {
    title:PropTypes.string.isRequired,
    About:PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here",
    About: "About text here"
}