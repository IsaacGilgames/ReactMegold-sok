import { useState, useEffect } from "react";
import ReactDOM from 'react-dom/client';






function Characters() {

    const [karakterek, setkarakterek] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44376/api/SchoolTeams')
        .then(response => {
            if(!response.ok){
                throw new Error("Hiba történt a lekérés során!")
            }
            return response.json()
        })
        //.then(data => console.log(data))
        .then(data => {
            setkarakterek(data)
        })
        .catch((error) => console.log(error));
      }, []);
    

    return (
      <div className="characters ">
        <h1 className="text-center pt-2 pt-lg-4">Csapatok</h1>
        <div className="container">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="text-center align-middle">Név</th>
                    <th className="text-center align-middle">Csoport</th>
                    <th className="text-center align-middle">Győzelem idő</th>
                    <th className="text-center align-middle">Fénykép</th>
                </tr>
            </thead>
            <tbody>
                {karakterek.map(k => (
                
                <tr>
                    <td className="text-center align-middle">{k.TeamName}</td>
                    <td className="text-center align-middle">{k.TeamGroup}</td>
                    <td className="text-center align-middle">{k.Wins}</td>
                    <td className="text-center align-middle"><img src={k.ImageUrl} alt={k.TeamName}  height="100" /></td>
                </tr>
            
                ))}
            </tbody>
        </table>
    </div>
      </div>
    );
  }
  
export default Characters;