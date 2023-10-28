import React from "react";
import "../App.css";
import { NavLink, Link } from "react-router-dom";
import { height } from "@mui/system";

// import { a } from 'react-router-dom'
export default function (props) {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand white" href="#">
            TextUtils
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <NavLink to="about" className="nav-link" href="about">
                  About
                </NavLink>
              </li>
            </ul>

            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2" 
                onClick={()=>{props.toggleMode("primary")}}
                 style={{height:"30px", width:"30px", cursor:"pointer"}}
              ></div>
              <div
                className="bg-danger rounded mx-2" 
                onClick={()=>{props.toggleMode("danger")}}
                 style={{height:"30px", width:"30px", cursor:"pointer"}}
              ></div>
              <div
                className="bg-success rounded mx-2" 
                onClick={()=>{props.toggleMode("success")}}
                 style={{height:"30px", width:"30px", cursor:"pointer"}}
              ></div>
              <div
                className="bg-warning rounded mx-2" 
                onClick={()=>{props.toggleMode("warning")}}
                 style={{height:"30px", width:"30px", cursor:"pointer"}}
              ></div>
            </div>
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                onClick={props.darkMode}
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                {" "}
                DarkMode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
