import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditHome() {
  const [homeContent, setHomeContent] = useState({
    heroTitle: '',
    heroDescription: '',
    aboutText: '',
    skills: []
  });

  useEffect(() => {
    axios.get("https://revoori-sathwika-reddy.onrender.com/api/home", { withCredentials: true })
      .then(res => setHomeContent(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSave = () => {
    axios.put("https://revoori-sathwika-reddy.onrender.com/api/home", homeContent, { withCredentials: true })
      .then(() => alert('Saved!'))
      .catch(err => console.error(err));
  };

  return (
    <div className="editor-container">
      <h2>Edit Home Page</h2>
      
      <label>Hero Title:
        <input
          value={homeContent.heroTitle}
          onChange={e => setHomeContent({...homeContent, heroTitle: e.target.value})}
        />
      </label>

      <label>Hero Description:
        <textarea
          value={homeContent.heroDescription}
          onChange={e => setHomeContent({...homeContent, heroDescription: e.target.value})}
        />
      </label>

      <label>About Text:
        <textarea
          value={homeContent.aboutText}
          onChange={e => setHomeContent({...homeContent, aboutText: e.target.value})}
        />
      </label>

      <label>Skills (comma-separated):
        <input
          value={homeContent.skills.join(', ')}
          onChange={e => setHomeContent({
            ...homeContent,
            skills: e.target.value.split(',').map(s => s.trim())
          })}
        />
      </label>

      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}
