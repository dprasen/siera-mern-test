import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">Performance Review App</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/employeeslist" className="nav-link">Employees</Link>
          </li>          
          <li className="navbar-item">          
            <Link to="/createemployee" className="nav-link">Create Employee</Link>
          </li>
          <li className="navbar-item">          
            <Link to="/listreview" className="nav-link">Reviews</Link>
          </li>
          <li className="navbar-item">          
            <Link to="/createreview" className="nav-link">Create Review</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}