import { useState, useEffect } from "react";

export default function Table() {
   const [karakterek, setkarakterek] = useState([]);
      useEffect(() => {
          fetch('https://thronesapi.com/api/v2/Characters')
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
          <h1 className="text-center pt-2 pt-lg-4">Szereplők</h1>
          <div className="container">
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th className="text-center align-middle">Név</th>
                      <th className="text-center align-middle">Család</th>
                      <th className="text-center align-middle">Cím</th>
                      <th className="text-center align-middle">Kép</th>
                  </tr>
              </thead>
              <tbody>
                  {karakterek.map(k => (
                  
                  <tr>
                      <td className="text-center align-middle">{k.fullName}</td>
                      <td className="text-center align-middle">{k.family}</td>
                      <td className="text-center align-middle">{k.title}</td>
                      <td className="text-center align-middle"><img src={k.imageUrl} alt={k.fullName}  height="100" /></td>
                  </tr>
              
                  ))}
              </tbody>
          </table>
      </div>
        </div>
      );
}
