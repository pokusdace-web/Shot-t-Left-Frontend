import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import ProtectedRoutes from './Components/ProtectedRoutes';

import HomePage from './Pages/HomePage';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import UserDashboard from './Pages/UserDashboard';
import RankMonitor from './Pages/RankMonitor';
import BookingGateway from './Pages/BookingGateway';
import PaymentCheckout from './Pages/PaymentCheckout';
import UserProfile from './Pages/UserProfile';
import RideHistory from './Pages/RideHistory';
import SavedPlaces from './Pages/SavedPlaces';

import './App.css';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('shotLeftAuthenticated') === 'true'
  );

  // GLOBAL WALLET BALANCE STATE METER
  const [walletBalance, setWalletBalance] = useState(120.00);

  // GLOBAL DYNAMIC AUTHENTICATED USER INSTANCE INITIALIZER
  const [userProfile, setUserProfile] = useState(() => {
    const savedUser = localStorage.getItem('shotLeftUser');
    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        return {
          username: parsed.username || 'Commuter',
          email: parsed.email || 'user@domain.co.za',
          tier: parsed.tier || 'Premium User',
          avatarLetter: parsed.username ? parsed.username.charAt(0).toUpperCase() : 'C'
        };
      } catch (e) {
        console.error("Failed to parse cached authentication user token registry.");
      }
    }
    return {
      username: 'Commuter',
      email: 'user@domain.co.za',
      tier: 'Premium User',
      avatarLetter: 'C'
    };
  });

  const [globalBooking, setGlobalBooking] = useState({
    origin: 'Current Location',
    destination: '',
    distance: '0.0 km',
    seats: 1,
    totalCost: 0
  });

  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
          walletBalance={walletBalance}
          userProfile={userProfile}
          setUserProfile={setUserProfile}
        />

        <main className="app-content">
          <Routes>
            {/* PUBLIC PAGES */}
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/signin"
              element={
                <SignIn
                  setIsAuthenticated={setIsAuthenticated}
                  setUserProfile={setUserProfile}
                />
              }
            />

            {/* PROTECTED PAGES */}
            <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
              <Route path="/dashboard" element={<UserDashboard userProfile={userProfile} />} />
              <Route path="/rank-monitor" element={<RankMonitor />} />
              
              <Route
                path="/booking-gateway"
                element={
                  <BookingGateway
                    setGlobalBooking={setGlobalBooking}
                    walletBalance={walletBalance}
                    setWalletBalance={setWalletBalance}
                  />
                }
              />

              <Route
                path="/payment-checkout"
                element={<PaymentCheckout globalBooking={globalBooking} userProfile={userProfile} />}
              />

              <Route
                path="/profile"
                element={
                  <UserProfile 
                    userProfile={userProfile} 
                    setUserProfile={setUserProfile}
                    walletBalance={walletBalance}
                    setWalletBalance={setWalletBalance}
                  />
                }
              />

              <Route path="/history" element={<RideHistory />} />
              <Route path="/saved-places" element={<SavedPlaces />} />
            </Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}


// import { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Navbar from './Components/Navbar';
// import ProtectedRoutes from './Components/ProtectedRoutes';

// import HomePage from './Pages/HomePage';
// import SignUp from './Pages/SignUp';
// import SignIn from './Pages/SignIn';
// import UserDashboard from './Pages/UserDashboard';
// import RankMonitor from './Pages/RankMonitor';
// import BookingGateway from './Pages/BookingGateway';
// import PaymentCheckout from './Pages/PaymentCheckout';
// import UserProfile from './Pages/UserProfile';
// import RideHistory from './Pages/RideHistory';
// import SavedPlaces from './Pages/SavedPlaces';

// import './App.css';

// export default function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem('shotLeftAuthenticated') === 'true'
//   );

//   // GLOBAL STATE FOR ACCOUNT WALLET BALANCE
//   const [walletBalance, setWalletBalance] = useState(120.00);

//   // GLOBAL STATE FOR USER PROFILE DETAILS
//   const [userProfile, setUserProfile] = useState({
//     username: 'David',
//     email: 'david@example.com',
//     tier: 'Premium User',
//     avatarLetter: 'D'
//   });

//   const [globalBooking, setGlobalBooking] = useState({
//     origin: 'Current Location',
//     destination: '',
//     distance: '0.0 km',
//     seats: 1,
//     totalCost: 0
//   });

//   return (
//     <BrowserRouter>
//       <div className="app-shell">
//         {/* Pass financial data and profile hooks down to the Navbar */}
//         <Navbar
//           isAuthenticated={isAuthenticated}
//           setIsAuthenticated={setIsAuthenticated}
//           walletBalance={walletBalance}
//           userProfile={userProfile}
//         />

//         <main className="app-content">
//           <Routes>
//             {/* PUBLIC PAGES */}
//             <Route path="/" element={<HomePage />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route
//               path="/signin"
//               element={<SignIn setIsAuthenticated={setIsAuthenticated} />}
//             />

//             {/* PROTECTED PAGES */}
//             <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
//               <Route path="/dashboard" element={<UserDashboard />} />
//               <Route path="/rank-monitor" element={<RankMonitor />} />
              
//               <Route
//                 path="/booking-gateway"
//                 element={
//                   <BookingGateway
//                     setGlobalBooking={setGlobalBooking}
//                     walletBalance={walletBalance}
//                     setWalletBalance={setWalletBalance}
//                   />
//                 }
//               />

//               <Route
//                 path="/payment-checkout"
//                 element={<PaymentCheckout globalBooking={globalBooking} />}
//               />

//               <Route
//                 path="/profile"
//                 element={
//                   <UserProfile 
//                     userProfile={userProfile} 
//                     setUserProfile={setUserProfile}
//                     walletBalance={walletBalance}
//                     setWalletBalance={setWalletBalance}
//                   />
//                 }
//               />

//               <Route path="/history" element={<RideHistory />} />
//               <Route path="/saved-places" element={<SavedPlaces />} />
//             </Route>
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }
