import React, { useState } from 'react';
import './Regist.css';
const Regist = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'beginner',
    age: '',
    guardianName: '',
    guardianPhone: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container">
        <div className="form-card success-msg">
          <h2>Sakk-matt! ♟️</h2>
          <p>Köszönjük, <strong>{formData.name}</strong>!</p>
          <p>A jelentkezésedet sikeresen rögzítettük a <strong>{formData.category === 'beginner' ? 'Kezdő' : 'Haladó'}</strong> kategóriába.</p>
          <button className="submit-btn" onClick={() => setSubmitted(false)}>Vissza</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="form-card">
        <h2>Grandmaster Showdown</h2>
        <p className="slogan">"Tedd meg az első lépést a nagymesteri cím felé!"</p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Teljes név</label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Minta János" />
          </div>

          <div className="form-group">
            <label>Email cím</label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="pelda@email.com" />
          </div>

          <div className="form-group">
            <label>Kategória</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="beginner">Kezdő</option>
              <option value="advanced">Haladó</option>
            </select>
          </div>

          <div className="form-group">
            <label>Életkor</label>
            <input type="number" name="age" required value={formData.age} onChange={handleChange} placeholder="18" />
          </div>

          {formData.age && parseInt(formData.age) < 18 && (
            <div className="guardian-section">
              <div className="form-group">
                <label>Kísérő felnőtt neve</label>
                <input type="text" name="guardianName" required value={formData.guardianName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Kísérő telefonszáma</label>
                <input type="tel" name="guardianPhone" required value={formData.guardianPhone} onChange={handleChange} />
              </div>
            </div>
          )}

          <button type="submit" className="submit-btn">Jelentkezés beküldése</button>
        </form>
      </div>
    </div>
  );
};

export default Regist;