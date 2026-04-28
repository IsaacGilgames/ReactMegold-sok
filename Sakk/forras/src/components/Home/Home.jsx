import React, { useEffect, useState } from "react";
import './Home.css'; 
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="Home">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Sakkverseny</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/regisztráció">Jelentkezés</Link>
          </li>
        </ul>
      </nav>
  

      <div className="jumbotron jumbotron-fluid text-white text-center d-flex align-items-center justify-content-center fade-in" >
        <div className="bg-dark p-4 rounded-lg shadow-lg border border-success">
          <h1 className="display-4">Tedd meg az első lépést a nagymesteri cím felé!</h1>
          <p className="lead">A jövő bajnokai a mai táblákon születnek.</p>
          <Link className="btn btn-warning btn-lg" to="/regisztráció">
            Sakk-matt az unalomnak.
          </Link>
        </div>
      </div>
    </div>
  </div>
    
  );
}
