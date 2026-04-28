import "./kinalat.css";
import React, { useState, useEffect } from "react";




function Kinalat() {

    const [polok, setPolok] = useState([]);
    useEffect(() => {
        fetch('http://127.0.0.1:8080/api/AjandekPolok')
        .then(response => {
            if(!response.ok){
                throw new Error("Hiba történt a lekérés során!")
            }
            return response.json()
        })
        //.then(data => console.log(data))
        .then(data => {
            setPolok(data)
        })
        .catch((error) => console.log(error));
      }, []);


  return (
    <div className="kinalat">
    <h2>Választható nyeremények</h2>
    <table className="table table-dark table-hover table-striped text-center align-middle">
      <thead>
        <tr>
          <th >Kép</th>
          <th>Ár</th>
          <th>Típus</th>
        </tr>
      </thead>
      <tbody>
        {polok.map(polo => 
            (
                <tr>
                    <td><img src={polo.KepUtvonal}/></td>
                    <td>{polo.Ar} Ft</td>
                    <td>{polo.Tipus}</td>
                </tr>
            )
        )}
       
      </tbody>
    </table>
  </div>
  );
}

export default Kinalat;
