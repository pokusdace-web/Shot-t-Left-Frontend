import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Plus, FolderOpen } from 'lucide-react';
import '../Styling/SavedPlaces.css';

export default function SavedPlaces() {
  const [places, setPlaces] = useState([]);
  const [label, setLabel] = useState('');
  const [address, setAddress] = useState('');

  const fetchPlaces = () => {
    fetch('http://localhost:3001/api/saved-places')
      .then(res => res.json())
      .then(data => setPlaces(data));
  };

  useEffect(() => { fetchPlaces(); }, []);

  const handleAddPlace = (e) => {
    e.preventDefault();
    if (!label || !address) return;

    fetch('http://localhost:3001/api/saved-places', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ label, address })
    })
    .then(() => {
      setLabel('');
      setAddress('');
      fetchPlaces();
    });
  };

  return (
    <div className="hf-feature-wrapper">
      <div className="hf-feature-card">
        <Link to="/dashboard" className="hf-back-arrow">←</Link>
        <h2>Saved Places</h2>
        <p className="subtitle">Your customized frequent transport nodes</p>

        {places.length === 0 ? (
          <div className="empty-state-text">📍 No locations saved yet. Save a location below!</div>
        ) : (
          <div className="saved-nodes-list">
            {places.map(place => (
              <div key={place.id} className="saved-node-row">
                <MapPin size={18} className="node-icon-tan" />
                <div>
                  <h4>{place.label}</h4>
                  <p>{place.address}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleAddPlace} className="save-node-form-block">
          <h4>Save a Location</h4>
          <input type="text" placeholder="Label (e.g. Home, Work, School)" value={label} onChange={(e) => setLabel(e.target.value)} required />
          <input type="text" placeholder="Street Address / Rank Name" value={address} onChange={(e) => setAddress(e.target.value)} required style={{ marginTop: '10px' }} />
          <button type="submit" className="add-new-node-btn"><Plus size={16} /> SAVE NODE POSITION</button>
        </form>
      </div>
    </div>
  );
}
