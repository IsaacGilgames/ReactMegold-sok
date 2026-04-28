import React from 'react';
import ReactDOM from 'react-dom/client';
import './urlap.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Urlap() {

    const [birthDate, setBirthDate] = useState("");
    const [name, setName] = useState("");
    const [winner, setwinner] = useState(0);
    const [category, setCategory] = useState("");
    const [urlImg, seturlImg] = useState("");


    const checkAge = () => {
        const birthDateObj = new Date(birthDate);
        const today = new Date();
        const age = today.getFullYear() - birthDateObj.getFullYear();
        const birthMonthDay = (today.getMonth() > birthDateObj.getMonth()) ||
                              (today.getMonth() === birthDateObj.getMonth() && today.getDate() >= birthDateObj.getDate());
        const isOver18 = age > 18 || (age === 18 && birthMonthDay);
        if (!isOver18){
            alert("Nem 18 éves!")
        }
        else{
           
            fetch('https://localhost:44376/api/Teniszezok',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(
                    {
                        
                        "Nev": name,
                        "Csoport": category,
                        "Gyozelem": winner,
                        "Fenykep": urlImg,
                    }),
                    
            })
            //.then(response => response.json())
            //.then(data => console.log(data))
            .then((response =>{
                if(!response.ok){
                    throw new Error("Hiba történt a küldés során!")
                }
                else{
                    alert(`Sikeres regisztráció!`)
                }
            }))
            .catch((error)=>{alert(error)
            });

        }
    };
        
        
        
      

    return (
      <div className='urlap'>

        <h1>Válaszd ki, melyik versenyszámban szeretnél indulni!</h1>
        

        <div className="container vertical center">
        <div className="title">Nevezési LAP</div>
        <div className="content vertical center">
            <div className="field horizontal center">
                <label className="label">Név:</label>
                <input type="text" id="persons"
                onChange={(e) => setName(e.target.value)}
                />
                
            </div>
            
            <div className="field horizontal center" >
                <label>Születési idő:</label>
                <input
                    type="date"
                    id="birthDate"
                    className="form-control mt-2"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    
                    
                />
            </div>
            <div className="field horizontal center" >
            <label htmlFor="category">Versenykategória:</label>
                <select
                id="category"
                className="form-control"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                >
              <option value="amatőr">Amatőr</option>
              <option value="profi">Profi</option>
              <option value="veterán">Veterán</option>
            </select>
            </div>
           
            <div className="field horizontal center">
                <label className="label">Győzelem</label>
                <input type="number" id="persons"  min="1" onChange={(e) => setwinner(e.target.value)}/>
            </div>
            <div className="field horizontal center" >
                <label className="label">Kép:</label>
                <input id="url" type="url" onChange={(e) => seturlImg(e.target.value)} />
            </div>
           
            <div className="horizontal center">
                <div className="label"></div>
                <button id="saveButton" title="Bérlés rögzítése" onClick={checkAge}>MENTÉS</button>
            </div>
        </div>
    </div>


      </div>
    );
  }
  
export default Urlap;