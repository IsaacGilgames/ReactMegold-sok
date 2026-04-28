import React, { useEffect, useState } from "react";
import './openpage.css'; 
import { Link } from "react-router-dom";


export default function TennisHomepage() {


  return (
    <div className="OpenPage">
        <div className="container-fluid min-vh-100">

      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
         <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link className="nav-link" to="/">Grand Slam Challenge</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/versenyzok">Versenyzők</Link>
                    </li>
                </ul>
        </nav>


      <div className="jumbotron jumbotron-fluid text-white text-center d-flex align-items-center justify-content-center fade-in" >
        <div className="bg-dark p-4 rounded-lg">
          <h1 className="display-4">Lépj pályára!</h1>
          <p className="lead">Vállald a kihívást, vegyél részt versenyünkön!</p>
         <Link className="btn btn-success btn-lg" to="/regisztracio">Regisztráció!</Link>
        </div>
      </div>
      
      <div className="row mt-5 justify-content-center">
       
          <div className="col-md-4 fade-in ">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Edzések minden szinten</h2>
               
              </div>
            </div>
          </div>
          
            <div className="col-md-4 fade-in ">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h2 className="card-title">Versenyek & Események</h2>
                 
                </div>
              </div>
            </div>
            
          <div className="col-md-4 fade-in ">
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Felszerelések & Tanácsok</h2>
               
              </div>
            </div>
          </div>
      </div>

    </div>
    </div>
    
  );
}
