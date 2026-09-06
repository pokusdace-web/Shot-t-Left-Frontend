import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { RefreshCw, Clock, ShieldCheck, Info } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import '../Styling/RankMonitor.css';

// Custom controller to reposition the Leaflet map view camera when clicking ranks
function FocusRankViewport({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 14);
    }
  }, [center, map]);
  return null;
}

export default function RankMonitor() {
  const ranks = [
    { id: 1, name: "Bree Taxi Rank", status: "High", wait: "32 min", count: 86, coords: [-26.2018, 28.0402], security: "Optimal Control", peakTime: "07:00 - 09:00" },
    { id: 2, name: "Noord Street Rank", status: "Medium", wait: "18 min", count: 54, coords: [-26.1989, 28.0461], security: "Monitored Patrols", peakTime: "16:30 - 18:30" },
    { id: 3, name: "Soweto Orlando East", status: "Low", wait: "8 min", count: 42, coords: [-26.2415, 27.9254], security: "Clear Transit Corridor", peakTime: "08:00 - 10:00" }
  ];

  // ✅ FIXED STATE SELECTION: Sets default target pointer to object index instead of an array string
  const [selectedRank, setSelectedRank] = useState(ranks[0]);
  const [refreshing, setRefreshing] = useState(false);

  const handleRefreshData = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 600);
  };

  return (
    <div className="user-dashboard">
      
      {/* CARD HEADER NODE COMPONENT */}
      <div className="dashboard-intro" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', width: '100%' }}>
        <div>
          <span className="dashboard-eyebrow" style={{ color: '#c99b6b', fontWeight: '700', letterSpacing: '1px' }}>LIVE STATION MONITOR</span>
          <h2>Taxi Rank Monitor</h2>
          <p className="dashboard-description" style={{ color: 'rgba(255,255,255,0.6)', margin: '4px 0 0 0' }}>
            Review real-time congestion spikes, vehicle metrics, and peak transit windows.
          </p>
        </div>
        <button 
          onClick={handleRefreshData}
          style={{ background: '#111823', border: '1px solid #273243', padding: '10px 16px', borderRadius: '10px', color: '#FFF', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontWeight: '600', height: 'fit-content' }}
        >
          <RefreshCw size={14} className={refreshing ? 'spin-animation' : ''} />
          {refreshing ? 'Syncing...' : 'Refresh'}
        </button>
      </div>

      {/* DUAL COLUMN SPLIT SYSTEM GRID */}
      <div className="dashboard-main-grid">
        
        {/* MAP COMPONENT CARD */}
        <div className="booking-card" style={{ padding: '0', overflow: 'hidden', background: '#101621', border: '1px solid #202938' }}>
          <div className="card-header" style={{ padding: '16px 20px', borderBottom: '1px solid #202938', margin: '0' }}>
            <h3>Live Map View</h3>
            <p style={{ color: '#c99b6b', fontWeight: '600' }}>📍 Currently tracking: {selectedRank?.name}</p>
          </div>

          <div className="booking-map-container" style={{ height: 'calc(100vh - 360px)', minHeight: '420px', width: '100%', position: 'relative' }}>
            <MapContainer center={selectedRank ? selectedRank.coords : [-26.2041, 28.0473]} zoom={13} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
              <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {ranks.map(r => (
                <Marker key={r.id} position={r.coords}>
                  <Popup>
                    <div style={{ color: '#000', fontSize: '12px' }}>
                      <strong>{r.name}</strong>
                      <p style={{ margin: '4px 0 0 0' }}>Wait Time: {r.wait}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
              <FocusRankViewport center={selectedRank?.coords} />
            </MapContainer>
          </div>
        </div>

        {/* RIGHT HAND CONTENT COLUMN MODULE */}
        <div className="ranks-card" style={{ background: '#101621', border: '1px solid #202938', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div className="card-header" style={{ margin: '0 0 16px 0' }}>
              <h3>Station Overview Queues</h3>
              <p>Click any hub rank block below to focus your map viewport tracking camera</p>
            </div>

            <div className="rank-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {ranks.map(r => (
                <div 
                  key={r.id} 
                  onClick={() => setSelectedRank(r)}
                  className="rank-item"
                  style={{ 
                    background: '#111823', 
                    border: selectedRank?.id === r.id ? '1px solid #c99b6b' : '1px solid #202938',
                    borderRadius: '10px',
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    <h4 style={{ margin: '0 0 4px 0', fontSize: '14px', color: '#FFF', fontWeight: '700' }}>{r.name}</h4>
                    <p style={{ margin: 0, fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>
                      Wait: <strong style={{ color: '#FFF' }}>{r.wait}</strong> | Vehicles: <strong style={{ color: '#FFF' }}>{r.count}</strong>
                    </p>
                  </div>
                  <span className="quick-book-badge" style={{ 
                    background: r.status === 'High' ? 'rgba(255,74,74,0.1)' : r.status === 'Medium' ? 'rgba(255,152,0,0.1)' : 'rgba(0,230,118,0.1)',
                    color: r.status === 'High' ? '#FF4A4A' : r.status === 'Medium' ? '#FF9800' : '#00E676',
                    borderRadius: '6px',
                    fontWeight: '700'
                  }}>
                    {r.status.toUpperCase()}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', borderTop: '1px solid #202938', paddingTop: '16px' }}>
              <span style={{ fontSize: '10px', fontWeight: '700', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px', display: 'block', marginBottom: '12px' }}>
                LIVE DEPLOYMENT OPERATIONS
              </span>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#111823', padding: '12px', borderRadius: '8px', border: '1px solid #202938' }}>
                  <div style={{ color: '#00E676' }}><ShieldCheck size={16} /></div>
                  <div>
                    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>SECURITY RANK DISPATCH</span>
                    <strong style={{ fontSize: '12px', color: '#FFF' }}>{selectedRank?.security}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#111823', padding: '12px', borderRadius: '8px', border: '1px solid #202938' }}>
                  <div style={{ color: '#c99b6b' }}><Clock size={16} /></div>
                  <div>
                    <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>EXPECTED PEAK CONDITIONS</span>
                    <strong style={{ fontSize: '12px', color: '#FFF' }}>{selectedRank?.peakTime}</strong>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: 'rgba(201,155,107,0.02)', padding: '12px', borderRadius: '8px', border: '1px dashed rgba(201,155,107,0.15)' }}>
                  <div style={{ color: '#c99b6b', marginTop: '1px' }}><Info size={14} /></div>
                  <p style={{ margin: 0, fontSize: '11px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.4' }}>
                    Commuter Pass Note: Peak rush status shifts loading metrics dynamically. Keep card balances stacked inside settings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="dashboard-stats" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', marginTop: '20px', width: '100%' }}>
            <div className="stat-item" style={{ background: '#111823', border: '1px solid #202938', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ display: 'block', fontSize: '14px', color: '#c99b6b' }}>342</strong>
              <small style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Active Taxis</small>
            </div>
            <div className="stat-item" style={{ background: '#111823', border: '1px solid #202938', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ display: 'block', fontSize: '14px', color: '#FFF' }}>18</strong>
              <small style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Ranks</small>
            </div>
            <div className="stat-item" style={{ background: '#111823', border: '1px solid #202938', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
              <strong style={{ display: 'block', fontSize: '14px', color: '#00E676' }}>12 min</strong>
              <small style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Avg Wait</small>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}





// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MapContainer, TileLayer, Polyline, Marker, useMap } from 'react-leaflet';
// import { Users, Info, Navigation, ArrowRight } from 'lucide-react';
// import 'leaflet/dist/leaflet.css';
// import '../Styling/BookingGateway.css';

// const REPO_HUBS = {
//   "Bree Taxi Rank (JHB CBD)": [-26.2018, 28.0402],
//   "Noord Street / MTN Rank": [-26.1989, 28.0461],
//   "Soweto Orlando East": [-26.2415, 27.9254],
//   "Baragwanath Hospital (Soweto)": [-26.2625, 27.9412]
// };

// function SyncBookingViewport({ center }) {
//   const map = useMap();
//   useEffect(() => {
//     if (center) map.setView(center, 13);
//   }, [center, map]);
//   return null;
// }

// export default function BookingGateway({ setGlobalBooking }) {
//   const navigate = useNavigate();
//   const [currentLocation, setCurrentLocation] = useState([-26.2041, 28.0473]); // User Position Mock
//   const [destination, setDestination] = useState('Bree Taxi Rank (JHB CBD)');
//   const [seats, setSeats] = useState(2);
//   const [rideType, setRideType] = useState('Shared');

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => setCurrentLocation([pos.coords.latitude, pos.coords.longitude]),
//         () => console.log("Using default fallback triangulation matrix.")
//       );
//     }
//   }, []);

//   const destCoords = REPO_HUBS[destination] || [-26.2018, 28.0402];
  
//   // Calculate pseudo distance metrics
//   const latDiff = Math.abs(currentLocation[0] - destCoords[0]);
//   const lngDiff = Math.abs(currentLocation[1] - destCoords[1]);
//   const distanceKM = Number(((latDiff + lngDiff) * 72).toFixed(1));
//   const timeMins = Math.round(distanceKM * 1.5);

//   const baseRate = rideType === 'Direct' ? 9.00 : 4.00;
//   const calculatedFare = Math.round(12 + (distanceKM * baseRate));
//   const totalCost = calculatedFare * seats;

//   const handleProcessCheckout = () => {
//     setGlobalBooking({
//       origin: "Current Location",
//       destination: destination,
//       distance: `${distanceKM} km`,
//       time: `${timeMins} min`,
//       seats: seats,
//       rideType: rideType,
//       totalCost: totalCost
//     });
//     navigate('/payment-checkout');
//   };

//   return (
//     <div className="widescreen-content-wrapper-shifted">
//       <div className="dashboard-grid-container">
        
//         {/* Navigation summary ribbon card row */}
//         <div className="col-span-12 hf-route-summary-node" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', background: '#0E131F', border: '1px solid #1F283D', borderRadius: '12px' }}>
//           <div style={{ fontSize: '13px' }}>🟢 Pickup: <strong>My Current Location</strong></div>
//           <Navigation size={14} className="text-muted" />
//           <div style={{ fontSize: '13px' }}>
//             🔴 Dropoff: 
//             <select value={destination} onChange={(e) => setDestination(e.target.value)} style={{ background: 'transparent', border: 'none', color: '#E5BA93', fontWeight: '700', padding: 0, marginLeft: '6px', width: 'auto' }}>
//               {Object.keys(REPO_HUBS).map(k => <option key={k} value={k} style={{background:'#0E131F'}}>{k}</option>)}
//             </select>
//           </div>
//         </div>

//         {/* Left Side Column Panel: Map Canvas Area Tracking View */}
//         <div className="col-span-8 hf-widescreen-map-card" style={{ position: 'relative' }}>
//           <MapContainer center={currentLocation} zoom={13} style={{ height: "100%", width: "100%" }}>
//             <TileLayer url="https://{s}://{z}/{x}/{y}{r}.png" />
//             <Marker position={currentLocation} />
//             <Marker position={destCoords} />
//             <Polyline positions={[currentLocation, destCoords]} color="#00E676" weight={3} dashArray="5, 10" />
//             <SyncBookingViewport center={currentLocation} />
//           </MapContainer>
//           <div className="map-telemetry-badge" style={{ position: 'absolute', top: '16px', right: '16px', background: '#0E131F', border: '1px solid #1F283D', padding: '10px 16px', borderRadius: '10px', zIndex: '1000', display: 'flex', flexDirection: 'column', gap: '2px' }}>
//             <strong style={{ fontSize: '14px', color: '#E5BA93' }}>{distanceKM} km</strong>
//             <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>~{timeMins} min transit</span>
//           </div>
//         </div>

//         {/* Right Side Column Panel: Fine-Tuned Allocation Form Controller Box */}
//         <div className="col-span-4 layout-panel-card card-padded" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
//           <div>
//             <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '20px' }}>Configure Request</h3>
            
//             <div className="control-section-row" style={{ marginBottom: '20px' }}>
//               <label style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Seats Needed</label>
//               <div className="counter-box" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#151C2C', border: '1px solid #1F283D', padding: '6px', borderRadius: '10px', marginTop: '6px' }}>
//                 <button type="button" onClick={() => setSeats(Math.max(1, seats - 1))} style={{ width: '28px', height: '28px', background: '#0E131F', borderRadius: '6px', color: 'white' }}>-</button>
//                 <span style={{ fontWeight: '700', fontSize: '14px' }}>{seats}</span>
//                 <button type="button" onClick={() => setSeats(seats + 1)} style={{ width: '28px', height: '28px', background: '#0E131F', borderRadius: '6px', color: 'white' }}>+</button>
//               </div>
//             </div>

//             <div className="control-section-row" style={{ marginBottom: '24px' }}>
//               <label style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Ride Class Tier</label>
//               <div className="ride-type-selectors" style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
//                 <button type="button" className={`selector-btn ${rideType === 'Shared' ? 'active-btn-outline' : ''}`} onClick={() => setRideType('Shared')} style={{ flex: '1', padding: '12px', borderRadius: '10px', background: '#151C2C', border: rideType === 'Shared' ? '1px solid #E5BA93' : '1px solid #1F283D', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
//                   <strong style={{ fontSize: '13px', color: 'white' }}>Shared</strong><span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Cheaper Rate</span>
//                 </button>
//                 <button type="button" className={`selector-btn ${rideType === 'Direct' ? 'active-btn-outline' : ''}`} onClick={() => setRideType('Direct')} style={{ flex: '1', padding: '12px', borderRadius: '10px', background: '#151C2C', border: rideType === 'Direct' ? '1px solid #E5BA93' : '1px solid #1F283D', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
//                   <strong style={{ fontSize: '13px', color: 'white' }}>Direct</strong><span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Faster Line</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #1F283D', paddingTop: '16px', marginBottom: '16px' }}>
//               <div><p style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Total Cost Fare</p><h2 style={{ fontSize: '24px', fontWeight: '700', color: 'var(--text-main)' }}>R{totalCost}.00</h2></div>
//               {rideType === 'Shared' && <span style={{ background: 'rgba(0,230,118,0.1)', color: '#00E676', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' }}>Optimized Economy</span>}
//             </div>
//             <button onClick={handleProcessTransaction} className="master-action-btn-tan" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
//               CONTINUE TO PAS CHECKOUT <ArrowRight size={16} />
//             </button>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }
