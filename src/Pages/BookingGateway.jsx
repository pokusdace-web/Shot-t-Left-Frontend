// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { MapContainer, TileLayer, Polyline, Marker } from 'react-leaflet';
// import '../Styling/BookingGateway.css';

// export default function BookingGateway({ setGlobalBooking }) {
//   const navigate = useNavigate();
//   const [seats, setSeats] = useState(2);
//   const [rideType, setRideType] = useState('Shared');

//   const startCoords = [-26.2041, 28.0473];
//   const endCoords = [-26.2018, 28.0402];

//   const handleContinue = () => {
//     setGlobalBooking({
//       origin: "Current Location",
//       destination: "Bree Taxi Rank",
//       distance: "12.6 km",
//       seats: seats,
//       totalCost: 48
//     });
//     navigate('/payment-checkout');
//   };

//   return (
//     <div className="hf-book-wrapper">
//       <div className="hf-book-header">
//         <button onClick={() => navigate('/dashboard')} className="hf-back-arrow">←</button>
//         <h2>Book Your Ride</h2>
//       </div>

//       <div className="hf-route-summary-node">
//         <p>🟢 From: <strong>Current Location</strong></p>
//         <p>🔴 To: <strong>Bree Taxi Rank</strong></p>
//       </div>

//       <div className="hf-book-split">
//         <div className="hf-book-map">
//           <MapContainer center={startCoords} zoom={13} style={{ height: "100%", width: "100%" }}>
//             <TileLayer url="https://{s}://{z}/{x}/{y}{r}.png" />
//             <Marker position={startCoords} />
//             <Marker position={endCoords} />
//             <Polyline positions={[startCoords, endCoords]} color="#00E676" dashArray="5, 10" />
//           </MapContainer>
//           <div className="map-telemetry-badge">
//             <strong>12.6 km</strong>
//             <span>~24 min</span>
//           </div>
//         </div>

//         <div className="hf-book-controls">
//           <div className="control-section-row">
//             <label>Seats Needed</label>
//             <div className="counter-box">
//               <button type="button" onClick={() => setSeats(Math.max(1, seats - 1))}>-</button>
//               <span>{seats}</span>
//               <button type="button" onClick={() => setSeats(seats + 1)}>+</button>
//             </div>
//           </div>

//           <div className="control-section-row">
//             <label>Ride Type</label>
//             <div className="ride-type-selectors">
//               <button type="button" className={rideType === 'Shared' ? 'selected' : ''} onClick={() => setRideType('Shared')}>
//                 <strong>Shared</strong><span>Cheaper</span>
//               </button>
//               <button type="button" className={rideType === 'Direct' ? 'selected' : ''} onClick={() => setRideType('Direct')}>
//                 <strong>Direct</strong><span>Faster</span>
//               </button>
//             </div>
//           </div>

//           <div className="hf-book-footer-price">
//             <div>
//               <p>Estimated Fare</p>
//               <h3>R48.00</h3>
//             </div>
//             <span className="savings-pill">You save R16 with Shared Ride</span>
//           </div>

//           <button onClick={handleContinue} className="hf-btn-tan-large">CONTINUE TO PAYMENT</button>
//         </div>
//       </div>
//     </div>
//   );
// }




// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   MapContainer,
//   TileLayer,
//   Polyline,
//   CircleMarker,
//   Popup,
//   useMap
// } from 'react-leaflet';

// import {
//   Users,
//   MapPin,
//   Navigation,
//   ArrowRight,
//   Minus,
//   Plus,
//   Clock,
//   Route,
//   Car
// } from 'lucide-react';

// import 'leaflet/dist/leaflet.css';
// import '../Styling/BookingGateway.css';

// const REPO_HUBS = {
//   "Bree Taxi Rank (JHB CBD)": [-26.2018, 28.0402],
//   "Noord Street / MTN Rank": [-26.1989, 28.0461],
//   "Soweto Orlando East": [-26.2415, 27.9254],
//   "Baragwanath Hospital (Soweto)": [-26.2625, 27.9412]
// };

// function SyncBookingViewport({ center, route }) {
//   const map = useMap();

//   useEffect(() => {
//     if (route && route.length > 1) {
//       map.fitBounds(route, {
//         padding: [40, 40]
//       });
//     } else if (center) {
//       map.setView(center, 13);
//     }
//   }, [center, route, map]);

//   return null;
// }

// export default function BookingGateway({ setGlobalBooking }) {
//   const navigate = useNavigate();

//   const [currentLocation, setCurrentLocation] = useState([-26.2041, 28.0473]);
//   const [destination, setDestination] = useState('Bree Taxi Rank (JHB CBD)');
//   const [seats, setSeats] = useState(2);
//   const [rideType, setRideType] = useState('Shared');
//   const [route, setRoute] = useState([]);
//   const [routeLoading, setRouteLoading] = useState(false);

//   const destCoords = REPO_HUBS[destination] || REPO_HUBS["Bree Taxi Rank (JHB CBD)"];

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => setCurrentLocation([pos.coords.latitude, pos.coords.longitude]),
//         () => console.log("Using default Johannesburg location.")
//       );
//     }
//   }, []);

//   useEffect(() => {
//     const getRoute = async () => {
//       setRouteLoading(true);
//       try {
//         const url = `https://project-osrm.org{currentLocation[1]},${currentLocation[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.routes && data.routes.length > 0 && data.routes[0].geometry) {
//           const roadRoute = data.routes[0].geometry.coordinates.map(point => [point[1], point[0]]);
//           setRoute(roadRoute);
//         } else {
//           setRoute([currentLocation, destCoords]);
//         }
//       } catch (error) {
//         console.log("Route service unavailable. Using fallback route.");
//         setRoute([currentLocation, destCoords]);
//       }
//       setRouteLoading(false);
//     };
//     getRoute();
//   }, [currentLocation, destination]);

//     const latDiff = Math.abs(currentLocation[0] - destCoords[0]);
//   const lngDiff = Math.abs(currentLocation[1] - destCoords[1]);
//   const distanceKM = Number(((latDiff + lngDiff) * 72).toFixed(1));
//   const timeMins = Math.max(5, Math.round(distanceKM * 1.5));

//   const baseRate = rideType === 'Direct' ? 9 : 4;
//   const calculatedFare = Math.max(12, Math.round(12 + distanceKM * baseRate));
//   const totalCost = calculatedFare * seats;

//   const handleProcessCheckout = () => {
//     if (typeof setGlobalBooking === 'function') {
//       setGlobalBooking({
//         origin: 'Current Location',
//         destination: destination,
//         distance: `${distanceKM} km`,
//         time: `${timeMins} min`,
//         seats: seats,
//         rideType: rideType,
//         totalCost: totalCost
//       });
//     }
//     navigate('/payment-checkout');
//   };

//   return (
//     <div className="booking-page">
//       <div className="booking-page-header">
//         <div>
//           <div className="booking-eyebrow"><Route size={14} /> BOOK A RIDE</div>
//           <h1>Plan your journey</h1>
//           <p>Choose your destination, seats and ride type. We'll show your route before checkout.</p>
//         </div>
//         <div className="booking-header-status"><span className="status-dot"></span>Location active</div>
//       </div>

//       <div className="booking-route-summary">
//         <div className="route-location">
//           <div className="route-icon pickup-icon"><MapPin size={17} /></div>
//           <div><span>FROM</span><strong>My Current Location</strong></div>
//         </div>
//         <div className="route-connector"><div></div><Navigation size={16} /><div></div></div>
//         <div className="route-location">
//           <div className="route-icon destination-icon"><MapPin size={17} /></div>
//           <div className="destination-summary"><span>TO</span><strong>{destination}</strong></div>
//         </div>
// //       </div>

// //       <div className="booking-main-grid">
// //         <div className="booking-map-card">
// //           <div className="map-card-header">
// //             <div><span className="section-label">YOUR ROUTE</span><h2>{destination}</h2></div>
// //             <div className="map-distance-badge"><strong>{distanceKM} km</strong><span>{timeMins} min</span></div>
// //           </div>

// //           <div className="booking-map-container">
// //             <MapContainer center={currentLocation} zoom={13} scrollWheelZoom={true} className="booking-leaflet-map">
// //               <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
// //               <CircleMarker center={currentLocation} radius={10} pathOptions={{ color: '#E5BA93', fillColor: '#E5BA93', fillOpacity: 1, weight: 3 }}><Popup><strong>Your pickup location</strong></Popup></CircleMarker>
// //               <CircleMarker center={destCoords} radius={10} pathOptions={{ color: '#D96C5F', fillColor: '#D96C5F', fillOpacity: 1, weight: 3 }}><Popup><strong>{destination}</strong></Popup></CircleMarker>
// //               {route.length > 1 && <Polyline positions={route} pathOptions={{ color: '#E5BA93', weight: 5, opacity: 0.9 }} />}
// //               <SyncBookingViewport center={currentLocation} route={route} />
// //             </MapContainer>
// //             {routeLoading && <div className="map-loading"><div className="loading-spinner"></div>Finding best route...</div>}
// //             <div className="map-legend">
// //               <div><span className="legend-dot pickup-dot"></span>Pickup</div>
// //               <div><span className="legend-dot destination-dot"></span>Destination</div>
// //             </div>
// //           </div>

// //           <div className="map-footer">
// //             <div className="map-footer-item"><Navigation size={16} /><div><span>Pickup</span><strong>Current location</strong></div></div>
// //             <div className="map-footer-item"><Clock size={16} /><div><span>Estimated time</span><strong>{timeMins} mins</strong></div></div>
// //             <div className="map-footer-item"><Route size={16} /><div><span>Distance</span><strong>{distanceKM} km</strong></div></div>
// //           </div>
// //         </div>

// //         <div className="booking-control-card">
// //           <div>
// //             <div className="control-card-heading">
// //               <span className="section-label">RIDE DETAILS</span>
// //               <h2>Configure your ride</h2>
// //               <p>Select where you're going and how many people are travelling.</p>
// //             </div>

// //             <div className="booking-control-section">
// //               <label><MapPin size={15} />Destination</label>
// //               <select value={destination} onChange={(e) => setDestination(e.target.value)} className="destination-select">
// //                 {Object.keys(REPO_HUBS).map((hub) => (<option key={hub} value={hub}>{hub}</option>))}
// //               </select>
// //             </div>

// //             <div className="booking-control-section">
// //               <div className="control-label-row"><label><Users size={15} />Number of seats</label><span>Maximum 8</span></div>
// //               <div className="seat-counter">
// //                 <button type="button" onClick={() => setSeats(Math.max(1, seats - 1))} disabled={seats === 1}><Minus size={17} /></button>
// //                 <div className="seat-number"><strong>{seats}</strong><span>{seats === 1 ? 'seat' : 'seats'}</span></div>
// //                 <button type="button" onClick={() => setSeats(Math.min(8, seats + 1))} disabled={seats === 8}><Plus size={17} /></button>
// //               </div>
// //             </div>

// //             <div className="booking-control-section">
// //               <label><Car size={15} />Ride type</label>
// //               <div className="ride-type-grid">
// //                 <button type="button" className={`ride-type-card ${rideType === 'Shared' ? 'active' : ''}`} onClick={() => setRideType('Shared')}>
// //                   <div><strong>Shared</strong><span>Affordable option</span></div>
// //                   <span className="ride-price">R{calculatedFare}</span>
// //                 </button>
// //                 <button type="button" className={`ride-type-card ${rideType === 'Direct' ? 'active' : ''}`} onClick={() => setRideType('Direct')}>
// //                   <div><strong>Direct</strong><span>Faster journey</span></div>
// //                   <span className="ride-price">R{calculatedFare}</span>
// //                 </button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="booking-fare-section">
// //             <div className="fare-row"><span>Ride fare</span><strong>R{calculatedFare}.00</strong></div>
// //             <div className="fare-row"><span>{seats} {seats === 1 ? 'seat' : 'seats'}</span><strong>R{totalCost}.00</strong></div>
// //             <div className="fare-divider"></div>
// //             <div className="fare-total">
// //               <div><span>Total estimated fare</span><strong>R{totalCost}.00</strong></div>
// //               {rideType === 'Shared' && <span className="economy-badge">BEST VALUE</span>}
// //             </div>
// //             <button onClick={handleProcessCheckout} className="booking-continue-btn">
// //               <span>Continue to checkout</span><ArrowRight size={18} />
// //             </button>
// //             <p className="booking-note">Fare is calculated from your selected route and number of seats.</p>
// //           </div>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }



// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   MapContainer,
//   TileLayer,
//   Polyline,
//   CircleMarker,
//   Popup,
//   useMap
// } from 'react-leaflet';

// import {
//   Users,
//   MapPin,
//   Navigation,
//   ArrowRight,
//   Minus,
//   Plus,
//   Clock,
//   Route,
//   Car
// } from 'lucide-react';

// import 'leaflet/dist/leaflet.css';
// import '../Styling/BookingGateway.css';

// const REPO_HUBS = {
//   "Bree Taxi Rank (JHB CBD)": [-26.2018, 28.0402],
//   "Noord Street / MTN Rank": [-26.1989, 28.0461],
//   "Soweto Orlando East": [-26.2415, 27.9254],
//   "Baragwanath Hospital (Soweto)": [-26.2625, 27.9412]
// };

// function SyncBookingViewport({ center, route }) {
//   const map = useMap();

//   useEffect(() => {
//     if (route && route.length > 1) {
//       map.fitBounds(route, {
//         padding: [40, 40]
//       });
//     } else if (center) {
//       map.setView(center, 13);
//     }
//   }, [center, route, map]);

//   return null;
// }

// export default function BookingGateway({ setGlobalBooking, walletBalance, setWalletBalance }) {
//   const navigate = useNavigate();

//   const [currentLocation, setCurrentLocation] = useState([-26.2041, 28.0473]);
//   const [destination, setDestination] = useState('Bree Taxi Rank (JHB CBD)');
//   const [seats, setSeats] = useState(2);
//   const [rideType, setRideType] = useState('Shared');
//   const [route, setRoute] = useState([]);
//   const [routeLoading, setRouteLoading] = useState(false);

//   const destCoords = REPO_HUBS[destination] || REPO_HUBS["Bree Taxi Rank (JHB CBD)"];

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => setCurrentLocation([pos.coords.latitude, pos.coords.longitude]),
//         () => console.log("Using default Johannesburg location.")
//       );
//     }
//   }, []);

//   useEffect(() => {
//     const getRoute = async () => {
//       setRouteLoading(true);
//       try {
//         // ✅ FIXED INTERNET ROUTING URL PATHWAY FORMAT HERE
//         const url = `https://project-osrm.org{currentLocation[1]},${currentLocation[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;
//         const response = await fetch(url);
//         const data = await response.json();

//         if (data.routes && data.routes.length > 0 && data.routes[0].geometry) {
//           const roadRoute = data.routes[0].geometry.coordinates.map(point => [point[1], point[0]]);
//           setRoute(roadRoute);
//         } else {
//           setRoute([currentLocation, destCoords]);
//         }
//       } catch (error) {
//         console.log("Route service unavailable. Using fallback route.");
//         setRoute([currentLocation, destCoords]);
//       }
//       setRouteLoading(false);
//     };
//     getRoute();
//   }, [currentLocation, destination, destCoords]);

//   const latDiff = Math.abs(currentLocation[0] - destCoords[0]);
//   const lngDiff = Math.abs(currentLocation[1] - destCoords[1]);
//   const distanceKM = Number(((latDiff + lngDiff) * 72).toFixed(1));
//   const timeMins = Math.max(5, Math.round(distanceKM * 1.5));

//   const baseRate = rideType === 'Direct' ? 9 : 4;
//   const calculatedFare = Math.max(12, Math.round(12 + distanceKM * baseRate));
//   const totalCost = calculatedFare * seats;

//   const handleProcessCheckout = () => {
//     const activeBalance = walletBalance !== undefined ? walletBalance : 120.00;
//     if (activeBalance < totalCost) {
//       alert(`Insufficient wallet balance. Total cost is R${totalCost}.00, but your account only has R${activeBalance.toFixed(2)}.`);
//       return;
//     }

//     if (typeof setWalletBalance === 'function') {
//       setWalletBalance(prev => prev - totalCost);
//     }

//     if (typeof setGlobalBooking === 'function') {
//       setGlobalBooking({
//         origin: 'Current Location',
//         destination: destination,
//         distance: `${distanceKM} km`,
//         time: `${timeMins} min`,
//         seats: seats,
//         rideType: rideType,
//         totalCost: totalCost
//       });
//     }
//     navigate('/payment-checkout');
//   };

//   return (
//     <div className="booking-page">
//       <div className="booking-page-header">
//         <div>
//           <div className="booking-eyebrow"><Route size={14} /> BOOK A RIDE</div>
//           <h1>Plan your journey</h1>
//           <p>Choose your destination, seats and ride type. We'll show your route before checkout.</p>
//         </div>
//         <div className="booking-header-status"><span className="status-dot"></span>Location active</div>
//       </div>

//       <div className="booking-route-summary">
//         <div className="route-location">
//           <div className="route-icon pickup-icon"><MapPin size={17} /></div>
//           <div><span>FROM</span><strong>My Current Location</strong></div>
//         </div>
//         <div className="route-connector"><div></div><Navigation size={16} /><div></div></div>
//         <div className="route-location">
//           <div className="route-icon destination-icon"><MapPin size={17} /></div>
//           <div className="destination-summary"><span>TO</span><strong>{destination}</strong></div>
//         </div>
//       </div>

//       <div className="booking-main-grid">
//         <div className="booking-map-card">
//           <div className="map-card-header">
//             <div><span className="section-label">YOUR ROUTE</span><h2>{destination}</h2></div>
//             <div className="map-distance-badge"><strong>{distanceKM} km</strong><span>{timeMins} min</span></div>
//           </div>

//           <div className="booking-map-container">
//             <MapContainer center={currentLocation} zoom={13} scrollWheelZoom={true} className="booking-leaflet-map">
//               <TileLayer attribution='&copy; OpenStreetMap contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//               <CircleMarker center={currentLocation} radius={10} pathOptions={{ color: '#E5BA93', fillColor: '#E5BA93', fillOpacity: 1, weight: 3 }}><Popup><strong>Your pickup location</strong></Popup></CircleMarker>
//               <CircleMarker center={destCoords} radius={10} pathOptions={{ color: '#D96C5F', fillColor: '#D96C5F', fillOpacity: 1, weight: 3 }}><Popup><strong>{destination}</strong></Popup></CircleMarker>
//               {route.length > 1 && <Polyline positions={route} pathOptions={{ color: '#E5BA93', weight: 5, opacity: 0.9 }} />}
//               <SyncBookingViewport center={currentLocation} route={route} />
//             </MapContainer>
//             {routeLoading && <div className="map-loading"><div className="loading-spinner"></div>Finding best route...</div>}
//             <div className="map-legend">
//               <div><span className="legend-dot pickup-dot"></span>Pickup</div>
//               <div><span className="legend-dot destination-dot"></span>Destination</div>
//             </div>
//           </div>

//           <div className="map-footer">
//             <div className="map-footer-item"><Navigation size={16} /><div><span>Pickup</span><strong>Current location</strong></div></div>
//             <div className="map-footer-item"><Clock size={16} /><div><span>Estimated time</span><strong>{timeMins} mins</strong></div></div>
//             <div className="map-footer-item"><Route size={16} /><div><span>Distance</span><strong>{distanceKM} km</strong></div></div>
//           </div>
//         </div>

//         <div className="booking-control-card">
//           <div>
//             <div className="control-card-heading">
//               <span className="section-label">RIDE DETAILS</span>
//               <h2>Configure your ride</h2>
//               <p>Select where you're going and how many people are travelling.</p>
//             </div>

//             <div className="booking-control-section">
//               <label><MapPin size={15} />Destination</label>
//               <select value={destination} onChange={(e) => setDestination(e.target.value)} className="destination-select">
//                 {Object.keys(REPO_HUBS).map((hub) => (<option key={hub} value={hub}>{hub}</option>))}
//               </select>
//             </div>

//             <div className="booking-control-section">
//               <div className="control-label-row"><label><Users size={15} />Number of seats</label><span>Maximum 8</span></div>
//               <div className="seat-counter">
//                 <button type="button" onClick={() => setSeats(Math.max(1, seats - 1))} disabled={seats === 1}><Minus size={17} /></button>
//                 <div className="seat-number"><strong>{seats}</strong><span>{seats === 1 ? 'seat' : 'seats'}</span></div>
//                 <button type="button" onClick={() => setSeats(Math.min(8, seats + 1))} disabled={seats === 8}><Plus size={17} /></button>
//               </div>
//             </div>

//             <div className="booking-control-section">
//               <label><Car size={15} />Ride type</label>
//               <div className="ride-type-grid">
//                 <button type="button" className={`ride-type-card ${rideType === 'Shared' ? 'active' : ''}`} onClick={() => setRideType('Shared')}>
//                   <div><strong>Shared</strong><span>Affordable option</span></div>
//                   <span className="ride-price">R{calculatedFare}</span>
//                 </button>
//                 <button type="button" className={`ride-type-card ${rideType === 'Direct' ? 'active' : ''}`} onClick={() => setRideType('Direct')}>
//                   <div><strong>Direct</strong><span>Faster journey</span></div>
//                   <span className="ride-price">R{calculatedFare}</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="booking-fare-section">
//             <div className="fare-row"><span>Ride fare</span><strong>R{calculatedFare}.00</strong></div>
//             <div className="fare-row"><span>{seats} {seats === 1 ? 'seat' : 'seats'}</span><strong>R{totalCost}.00</strong></div>
//             <div className="fare-divider"></div>
//             <div className="fare-total">
//               <div><span>Total estimated fare</span><strong>R{totalCost}.00</strong></div>
//               {rideType === 'Shared' && <span className="economy-badge">BEST VALUE</span>}
//             </div>
//             <button onClick={handleProcessCheckout} className="booking-continue-btn">
//               <span>Continue to checkout</span><ArrowRight size={18} />
//             </button>
//             <p className="booking-note">Fare is calculated from your selected route and number of seats.</p>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }



import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup, useMap } from 'react-leaflet';
import { Users, MapPin, Navigation, ArrowRight, Minus, Plus, Clock, Route, Car } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import '../Styling/BookingGateway.css';

const REPO_HUBS = {
  "Bree Taxi Rank (JHB CBD)": [-26.2018, 28.0402],
  "Noord Street / MTN Rank": [-26.1989, 28.0461],
  "Soweto Orlando East": [-26.2415, 27.9254],
  "Baragwanath Hospital (Soweto)": [-26.2625, 27.9412]
};

function SyncBookingViewport({ center, route }) {
  const map = useMap();
  useEffect(() => {
    if (route && route.length > 1) {
      map.fitBounds(route, { padding: [40, 40] });
    } else if (center) {
      map.setView(center, 13);
    }
  }, [center, route, map]);
  return null;
}

export default function BookingGateway({ setGlobalBooking, walletBalance, setWalletBalance }) {
  const navigate = useNavigate();
  const [currentLocation, setCurrentLocation] = useState([-26.2041, 28.0473]);
  const [destination, setDestination] = useState('Bree Taxi Rank (JHB CBD)');
  const [seats, setSeats] = useState(2);
  const [rideType, setRideType] = useState('Shared');
  const [route, setRoute] = useState([]);
  const [routeLoading, setRouteLoading] = useState(false);

  const destCoords = REPO_HUBS[destination] || REPO_HUBS["Bree Taxi Rank (JHB CBD)"];

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCurrentLocation([pos.coords.latitude, pos.coords.longitude])
      );
    }
  }, []);

  useEffect(() => {
    const getRoute = async () => {
      setRouteLoading(true);
      try {
        // ✅ OSRM RECONSTRUCTION REPAIRED
        const url = `https://project-osrm.org{currentLocation[1]},${currentLocation[0]};${destCoords[1]},${destCoords[0]}?overview=full&geometries=geojson`;
        const response = await fetch(url);
        const data = await response.json();
        if (data.routes && data.routes.length > 0 && data.routes[0].geometry) {
          const roadRoute = data.routes[0].geometry.coordinates.map(p => [p[1], p[0]]);
          setRoute(roadRoute);
        } else {
          setRoute([currentLocation, destCoords]);
        }
      } catch (error) {
        setRoute([currentLocation, destCoords]);
      }
      setRouteLoading(false);
    };
    getRoute();
  }, [currentLocation, destination, destCoords]);

  const latDiff = Math.abs(currentLocation[0] - destCoords[0]);
  const lngDiff = Math.abs(currentLocation[1] - destCoords[1]);
  const distanceKM = Number(((latDiff + lngDiff) * 72).toFixed(1));
  const timeMins = Math.max(5, Math.round(distanceKM * 1.5));

  const baseRate = rideType === 'Direct' ? 9 : 4;
  const calculatedFare = Math.max(12, Math.round(12 + distanceKM * baseRate));
  const totalCost = calculatedFare * seats;

  const handleProcessCheckout = () => {
    const activeFunds = walletBalance !== undefined ? walletBalance : 120.00;
    if (activeFunds < totalCost) {
      alert(`Insufficient funds! Trip costs R${totalCost}.00, your balance is R${activeFunds.toFixed(2)}.`);
      return;
    }
    if (typeof setWalletBalance === 'function') {
      setWalletBalance(prev => prev - totalCost);
    }
    if (typeof setGlobalBooking === 'function') {
      setGlobalBooking({
        origin: 'Current Location',
        destination: destination,
        distance: `${distanceKM} km`,
        time: `${timeMins} min`,
        seats: seats,
        rideType: rideType,
        totalCost: totalCost
      });
    }
    navigate('/payment-checkout');
  };

  return (
    <div className="booking-page">
      <div className="booking-page-header">
        <div>
          <div className="booking-eyebrow"><Route size={14} /> BOOK A RIDE</div>
          <h1>Plan your journey</h1>
          <p>Choose your destination, seats and ride type. We'll show your route before checkout.</p>
        </div>
        <div className="booking-header-status"><span className="status-dot"></span>Location active</div>
      </div>

      <div className="booking-route-summary">
        <div className="route-location">
          <div className="route-icon pickup-icon"><MapPin size={17} /></div>
          <div><span>FROM</span><strong>My Current Location</strong></div>
        </div>
        <div className="route-connector"><div></div><Navigation size={16} /><div></div></div>
        <div className="route-location">
          <div className="route-icon destination-icon"><MapPin size={17} /></div>
          <div className="destination-summary"><span>TO</span><strong>{destination}</strong></div>
        </div>
      </div>

      <div className="booking-main-grid">
        <div className="booking-map-card">
          <div className="map-card-header">
            <div><span className="section-label">YOUR ROUTE</span><h2>{destination}</h2></div>
            <div className="map-distance-badge"><strong>{distanceKM} km</strong><span>{timeMins} min</span></div>
          </div>

          <div className="booking-map-container">
            <MapContainer center={currentLocation} zoom={13} scrollWheelZoom={true} className="booking-leaflet-map">
              <TileLayer attribution='&copy; OpenStreetMap' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <CircleMarker center={currentLocation} radius={10} pathOptions={{ color: '#E5BA93', fillColor: '#E5BA93', fillOpacity: 1, weight: 3 }}><Popup><strong>Your pickup location</strong></Popup></CircleMarker>
              <CircleMarker center={destCoords} radius={10} pathOptions={{ color: '#D96C5F', fillColor: '#D96C5F', fillOpacity: 1, weight: 3 }}><Popup><strong>{destination}</strong></Popup></CircleMarker>
              {route.length > 1 && <Polyline positions={route} pathOptions={{ color: '#E5BA93', weight: 5, opacity: 0.9 }} />}
              <SyncBookingViewport center={currentLocation} route={route} />
            </MapContainer>
            {routeLoading && <div className="map-loading"><div className="loading-spinner"></div>Finding best route...</div>}
          </div>
        </div>

        <div className="booking-control-card">
          <div>
            <div className="control-card-heading">
              <span className="section-label">RIDE DETAILS</span>
              <h2>Configure your ride</h2>
            </div>
            <div className="booking-control-section">
              <label><MapPin size={15} />Destination</label>
              <select value={destination} onChange={(e) => setDestination(e.target.value)} className="destination-select">
                {Object.keys(REPO_HUBS).map((hub) => (<option key={hub} value={hub}>{hub}</option>))}
              </select>
            </div>
            <div className="booking-control-section">
              <div className="control-label-row"><label><Users size={15} />Number of seats</label></div>
              <div className="seat-counter">
                <button type="button" onClick={() => setSeats(Math.max(1, seats - 1))} disabled={seats === 1}><Minus size={17} /></button>
                <div className="seat-number"><strong>{seats}</strong></div>
                <button type="button" onClick={() => setSeats(Math.min(8, seats + 1))} disabled={seats === 8}><Plus size={17} /></button>
              </div>
            </div>
            <div className="booking-control-section">
              <label><Car size={15} />Ride type</label>
              <div className="ride-type-grid">
                <button type="button" className={`ride-type-card ${rideType === 'Shared' ? 'active' : ''}`} onClick={() => setRideType('Shared')}>
                  <div><strong>Shared</strong></div>
                  <span className="ride-price">R{calculatedFare}</span>
                </button>
                <button type="button" className={`ride-type-card ${rideType === 'Direct' ? 'active' : ''}`} onClick={() => setRideType('Direct')}>
                  <div><strong>Direct</strong></div>
                  <span className="ride-price">R{calculatedFare}</span>
                </button>
              </div>
            </div>
          </div>
          <div className="booking-fare-section">
            <div className="fare-total">
              <div><span>Total estimated fare</span><strong>R{totalCost}.00</strong></div>
            </div>
            <button onClick={handleProcessCheckout} className="booking-continue-btn">
              <span>Continue to checkout</span><ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
