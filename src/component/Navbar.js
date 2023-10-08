import React from 'react'
import '../App.css'
import { NavLink, Link } from "react-router-dom";

// import { a } from 'react-router-dom'
export default function (props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand white" href="#">TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       <Link to="/"> <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li></Link>
       <NavLink to = "about"><li className="nav-item">
          <a className="nav-link" href="about">About</a>
        </li></NavLink> 
      </ul>
      {/* <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary " type="submit">Search</button>
      </form> */}
      <div className={`form-check form-switch text-${props.mode=== "light"?"dark":"light"}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.mode=== "light"?"DarkMode":"LightMode"}</label>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
