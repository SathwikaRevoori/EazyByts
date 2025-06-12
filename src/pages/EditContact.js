import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditContact() {
  const [contactInfo, setContactInfo] = useState({
    email: '',
    phone: '',
    address: '',
    socialMedia: {
      github: '',
      linkedin: '',
      twitter: ''
    }
  });

  useEffect(() => {
    axios.get("https://revoori-sathwika-reddy.onrender.com/api/contact", { withCredentials: true })

      .then(res => setContactInfo(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSave = () => {
    axios.put("https://revoori-sathwika-reddy.onrender.com/api/contact", contactInfo, { withCredentials: true })
      .then(() => alert('Contact info saved!'))
      .catch(err => console.error(err));
  };

  const handleSocialMediaChange = (platform, value) => {
    setContactInfo({
      ...contactInfo,
      socialMedia: {
        ...contactInfo.socialMedia,
        [platform]: value
      }
    });
  };

  return (
    <div className="editor-container">
      <h2>Edit Contact Information</h2>
      
      <label>Email:
        <input
          type="email"
          value={contactInfo.email}
          onChange={e => setContactInfo({...contactInfo, email: e.target.value})}
        />
      </label>

      <label>Phone:
        <input
          type="tel"
          value={contactInfo.phone}
          onChange={e => setContactInfo({...contactInfo, phone: e.target.value})}
        />
      </label>

      <label>Address:
        <textarea
          value={contactInfo.address}
          onChange={e => setContactInfo({...contactInfo, address: e.target.value})}
        />
      </label>

      <div className="social-media-section">
        <h3>Social Media</h3>
        <label>GitHub:
          <input
            value={contactInfo.socialMedia.github}
            onChange={e => handleSocialMediaChange('github', e.target.value)}
          />
        </label>
        <label>LinkedIn:
          <input
            value={contactInfo.socialMedia.linkedin}
            onChange={e => handleSocialMediaChange('linkedin', e.target.value)}
          />
        </label>
        <label>Twitter/X:
          <input
            value={contactInfo.socialMedia.twitter}
            onChange={e => handleSocialMediaChange('twitter', e.target.value)}
          />
        </label>
      </div>

      <button onClick={handleSave}>Save Changes</button>
    </div>
  );
}
