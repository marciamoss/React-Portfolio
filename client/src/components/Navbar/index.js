import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav className="navdeco">
      <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <Link className="navbar-brand" to="/">
            Marcia Moss
          </Link>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
          <Link className="navbar-brand" to="/">
            About&nbsp;&nbsp;|
          </Link>
          <Link className="navbar-brand" to="/portfolio">
            &nbsp;&nbsp;Portfolio&nbsp;&nbsp;|
          </Link>
          <Link className="navbar-brand" to="/contact">
            &nbsp;&nbsp;Contact&nbsp;&nbsp;
          </Link>
        </div>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
