import React, { useState } from "react";
import "./Regist.css";
function Regist() {
  const [name, setName] = useState("");
  const [kategoria, setKategoria] = useState("beginner");
  const [paros, setParos] = useState(false);
  const [azon, setAzon] = useState("");
  const [name2, setName2] = useState("");
  const [azon2, setAzon2] = useState("");
  const [birthday, setBirthday] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    let jo = false;
    if (
      !name.match(/^[A-ZÖÜÓŐŰÚÉÁÍ][a-zöüóőúéáűí]+ [A-ZÖÜÓŐŰÚÉÁÍ][a-zöüóőúéáűí]/)
    ) {
      alert("Nem adtál meg teljes nevet!");
      jo = true;
    }
    if (kategoria === "advanced" && !azon.match(/^[A-Z]{2}[0-9]{5}$/)) {
      alert("Nem helyes a nevező azonosítója!");
      jo = true;
    }
    else{
      setAzon("")
      setAzon2("")
    }
    const szuletesiDatum = new Date(birthday);
    const ma = new Date();

    const datum14 = new Date(szuletesiDatum);
    datum14.setFullYear(datum14.getFullYear() + 14);

    if (ma < datum14) {
      alert("Nem múlt még el 14 éves!");
      jo = true;
    }
    if (paros) {
      if (
        !name.match(
          /^[A-ZÖÜÓŐŰÚÉÁÍ][a-zöüóőúéáűí]+ [A-ZÖÜÓŐŰÚÉÁÍ][a-zöüóőúéáűí]/,
        )
      ) {
        alert("Nem adtál meg teljes nevet!");
        jo = true;
      }
      if (kategoria === "advanced" && !azon2.match(/^[A-Z]{2}[0-9]{5}$/)) {
        alert("Nem helyes a második nevező azonosítója!");
        jo = true;
      }
    }
    else{
      setAzon2("")
      setName2("")
    }
    if(!jo){
      alert(
        `${name}\n${kategoria}${azon ? "\n" + azon : ""}\n${birthday}\n${name2 ? "\n" + name2 : ""}\n${azon2 ? "\n" + azon2 : ""}`
      )
    }
  }

  return (
    <div className="container">
      <div className="form-card">
        <h2>Szerva be, kifogás ki!</h2>
        <p className="slogan">"Játék. Szett. Győzelem."</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Teljes név</label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Minta János"
            />
          </div>

          <div className="form-group">
            <label>Kategória</label>
            <select
              name="category"
              value={kategoria}
              onChange={(e) => setKategoria(e.target.value)}
            >
              <option value="beginner">Kezdő</option>
              <option value="advanced">Haladó</option>
            </select>
          </div>
          {kategoria == "advanced" ? (
            <div className="form-group">
              <label>Versenyzői azonosító</label>
              <input
                type="text"
                name="azon"
                required
                value={azon}
                onChange={(e) => setAzon(e.target.value)}
                placeholder="AB12345"
              />
            </div>
          ) : (
            ""
          )}
          <div className="form-group">
            <label>Csapatban szeretne versenyezni?</label>
            <input
              type="date"
              name="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Csapatban szeretne versenyezni?</label>
            <input
              type="checkbox"
              name="paros"
              checked={paros}
              onChange={(e) => setParos(e.target.checked)}
            />
          </div>
          {paros ? (
            <>
              <div className="form-group">
                <label>Teljes név</label>
                <input
                  type="text"
                  name="name2"
                  required
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  placeholder="Minta János"
                />
              </div>
              {kategoria == "advanced" ? (
                <div className="form-group">
                  <label>Versenyzői azonosító</label>
                  <input
                    type="text"
                    name="azon2"
                    required
                    value={azon2}
                    onChange={(e) => setAzon2(e.target.value)}
                    placeholder="AB12345"
                  />
                </div>
              ) : (
                ""
              )}
            </>
          ) : (
            ""
          )}

          <button type="submit" className="submit-btn">
            Jelentkezés beküldése
          </button>
        </form>
      </div>
    </div>
  );
};

export default Regist;
