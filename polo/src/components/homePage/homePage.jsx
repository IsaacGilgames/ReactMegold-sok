import "./homePage.css";
import React, { useState, useEffect } from "react";


function HomePage() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [cim, setCim] = useState("");
    const [meret, setMeret] = useState("");
    



    const Post = () => {
      let jo = true
        if(name == "" || email == "" || tel == "" || cim == ""){
          jo = false
        }
        if(!tel.match(/^\+36[0-9]{8,10}$/)){
          jo = false
        }
        if(jo){
            fetch('http://127.0.0.1:8080/api/Regisztraciok',{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify(
                    {
                        
                        Nev: name,
                        Email: email,
                        Telefon: tel,
                        Cim: cim,
                        Meret: meret,
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
        else{
          alert("Valamelyik adat nem megfelelő!")
        }
    };


  return (
    <div className="container-fluid">
  <div className="row no-gutters">


    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <div className="form-section w-75 fade-in">
        <h2 className="mb-4 text-center">Regisztráció</h2>
        <div className="urlap">
          <div className="form-group">
            <label>Név</label>
            <input type="text" className="form-control" id="name" placeholder="Írd be a neved" 
            onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email cím</label>
            <input type="email" className="form-control" id="email" placeholder="Email címed" 
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Telefonszám</label>
            <input type="tel" className="form-control" id="phone" placeholder="Telefon szám" 
            onChange={(e) => setTel(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Cím</label>
            <input type="text" className="form-control" id="adress" placeholder="Pontos lakcím" 
            onChange={(e) => setCim(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Póló méret</label>
            <select className="form-control" id="shirt-size"
            value={meret}
            onChange={(e) => setMeret(e.target.value)}>
              <option value="XS">XS</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>

            </select>
          </div>
          
          <div className="form-group">
            <label>Felhasználói feltételek elfogadása</label>
            <input id="shirt-checkbox" type="checkbox" name="meccs"/>
          </div>
          <button type="submit" className="btn btn-success btn-lg shadow" onClick={e => Post()}>Feliratkozom</button>
        </div>
      </div>
    </div>


    <div className="col-md-6 image-section">
      <div className="btn-overlay text-center">
        <a href="#" className="btn btn-success btn-lg shadow">Nézd meg kínálatunkat!</a>
      </div>
    </div>

  </div>
</div>
  );
}

export default HomePage;
