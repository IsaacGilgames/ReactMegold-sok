import React, { useEffect, useState } from "react";
import './openpage.css'; 
import { Link } from "react-router-dom";


export default function OpenPage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 300);
  }, []);

  return (
    <div className="OpenPage">
        <div className="container-fluid min-vh-100">
      {/* Navbar */}
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

      {/* Hero Section */}
      <div className="jumbotron jumbotron-fluid text-white text-center d-flex align-items-center justify-content-center fade-in" >
        <div className="bg-dark p-4 rounded-lg">
          <h1 className="display-4">Lépj pályára!</h1>
          <p className="lead">Vállald a kihívást, vegyél részt versenyünkön!</p>
          <Link className="btn btn-success btn-lg" to="/regisztracio">Regisztráció!</Link>
        </div>
      </div>
      
      {/* Features Section */}
      <div className="row mt-5 justify-content-center">
        {["Edzések minden szinten", "Versenyek & Események", "Felszerelések & Tanácsok"].map((title, index) => (
          <div key={index} className={`col-md-4 fade-in delay-${index}`}>
            <div className="card shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    
  );
}
