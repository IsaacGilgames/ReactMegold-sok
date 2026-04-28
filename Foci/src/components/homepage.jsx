import React, { useState } from "react";
import "./homepage.css";
import { Link } from "react-router-dom";

export default function TennisHomepage() {
  const [name, setName] = useState("");
  const [winner, setWinner] = useState(0);
  const [category, setCategory] = useState("alsós");
  const [urlImg, setUrlImg] = useState("");
  const [accepted, setAccepted] = useState(false);

  const checkAge = () => {
    let jo = true
    if(name == ""){
        jo = false
    }
    //if(name)
    if(name.match(/[0-9]/)){
        jo = false
    }
    if(urlImg == ""){
        jo = false
    }
    if (!accepted) {
      alert("El kell fogadnod a feltételeket!");
    }
    if(accepted && jo){
        fetch("https://localhost:44376/api/SchoolTeams", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        TeamName: name,
        TeamGroup: category,
        Wins: Number(winner),
        ImageUrl: urlImg,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Hiba történt a küldés során!");
        }
        return response.json();
      })
      .then(() => {
        alert("Sikeres regisztráció!");
      })
      .catch((error) => {
        alert(error.message);
      });
    }
    else{
        alert("Valamelyik megadott adat hibás!")
    }
    
  };

  return (
    <div className="OpenPage">
      <div className="container-fluid">


        <div className="row">
          <div className="jumbotron jumbotron-fluid text-white text-center d-flex align-items-center justify-content-center fade-in col-lg-6">
            <div className="bg-dark p-4 rounded-lg">
              <h1 className="display-4">Lépj pályára!</h1>
              <p className="lead">
                Vállald a kihívást, vegyél részt versenyünkön!
              </p>
              <Link className="btn btn-success btn-lg" to="/resztvevok">
                Regisztrált csapatok!
              </Link>
            </div>
          </div>

          <div className="urlap col-lg-6">
            <h1>Regisztráció</h1>

            <div className="container vertical center">
              <div className="title">Nevezési LAP</div>

              <div className="content vertical center">
                <div className="field horizontal center">
                  <label>Csapatnév:</label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="field horizontal center">
                  <label>Versenykategória:</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value=""></option>
                    <option value="alsós">alsós</option>
                    <option value="felsős">felsős</option>
                    <option value="gimis">gimis</option>
                  </select>
                </div>

                <div className="field horizontal center">
                  <label>Győzelem</label>
                  <input
                    type="number"
                    min="1"
                    onChange={(e) => setWinner(e.target.value)}
                  />
                </div>

                <div className="field horizontal center">
                  <label>Kép:</label>
                  <input
                    type="url"
                    onChange={(e) => setUrlImg(e.target.value)}
                  />
                </div>

                <label className="foci-checkbox">
                  <input
                    type="checkbox"
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  Felhasználói feltételek elfogadása
                  <span className="checkmark"></span>
                </label>

                <div className="horizontal center">
                  <button onClick={checkAge}>MENTÉS</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}