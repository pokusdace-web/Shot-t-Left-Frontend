// import { Link, useNavigate } from 'react-router-dom';
// import { Car, User, LogOut, LayoutDashboard } from 'lucide-react';

// export default function Navbar({ isAuthenticated, setIsAuthenticated }) {
//   const navigate = useNavigate();

//   return (
//     <nav style={{
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       padding: '18px 40px',
//       background: '#111622',
//       borderBottom: '1px solid #262E3F',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000,
//       flexWrap: 'wrap',
//       gap: '12px'
//     }}>
//       <Link to="/" style={{ 
//         display: 'flex',
//         alignItems: 'center',
//         gap: '10px',
//         color: '#E5BA93', 
//         textDecoration: 'none', 
//         fontWeight: '800', 
//         fontSize: '20px'
//       }}>
//         <Car size={22} />
//         <span>Sho't Left</span>
//       </Link>

//       <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
//         <Link to="/" style={{ color: '#8E9AA8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Home</Link>
//         {!isAuthenticated ? (
//           <>
//             <Link to="/signup" style={{ color: '#8E9AA8', textDecoration: 'none', fontSize: '14px', fontWeight: '500' }}>Sign Up</Link>
//             <Link to="/signin" style={{ 
//               color: 'black', 
//               background: '#E5BA93',
//               textDecoration: 'none', 
//               fontSize: '14px', 
//               fontWeight: '700',
//               padding: '8px 16px',
//               borderRadius: '8px'
//             }}>Sign In</Link>
//           </>
//         ) : (
//           <>
//             <Link to="/dashboard" style={{ 
//               display: 'flex',
//               alignItems: 'center',
//               gap: '6px',
//               color: '#8E9AA8', 
//               textDecoration: 'none', 
//               fontSize: '14px'
//             }}>
//               <LayoutDashboard size={16} />
//               <span>Dashboard</span>
//             </Link>

//             <button onClick={() => { setIsAuthenticated(false); navigate('/'); }} style={{
//               display: 'flex',
//               alignItems: 'center',
//               gap: '6px',
//               background: 'transparent',
//               border: '1px solid #FF4A4A',
//               color: '#FF4A4A',
//               padding: '8px 14px',
//               borderRadius: '8px',
//               cursor: 'pointer',
//               fontSize: '13px',
//               fontWeight: '600'
//             }}>
//               <LogOut size={14} />
//               <span>Log Out</span>
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// }


// import {
//   Link,
//   useNavigate,
//   useLocation
// } from 'react-router-dom';

// import {
//   LayoutDashboard,
//   Car,
//   Ticket,
//   Layers,
//   History,
//   Star,
//   Wallet,
//   User,
//   HelpCircle,
//   LogOut,
//   Search,
//   Bell,
//   ChevronDown
// } from 'lucide-react';

// import '../Styling/Navbar.css';

// export default function Navbar({
//   isAuthenticated,
//   setIsAuthenticated
// }) {

//   const navigate = useNavigate();
//   const location = useLocation();

//   if (!isAuthenticated) {
//     return null;
//   }

//   const links = [
//     {
//       name: 'Dashboard',
//       path: '/dashboard',
//       icon: <LayoutDashboard size={18} />
//     },
//     {
//       name: 'Book Ride',
//       path: '/booking-gateway',
//       icon: <Car size={18} />
//     },
//     {
//       name: 'My Pass',
//       path: '/payment-checkout',
//       icon: <Ticket size={18} />
//     },
//     {
//       name: 'Ranks',
//       path: '/rank-monitor',
//       icon: <Layers size={18} />
//     },
//     {
//       name: 'Ride History',
//       path: '/history',
//       icon: <History size={18} />
//     },
//     {
//       name: 'Saved Places',
//       path: '/saved-places',
//       icon: <Star size={18} />
//     }
//   ];

//   const logout = () => {
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   return (
//     <>

//       {/* ================= DESKTOP SIDEBAR ================= */}

//       <aside className="desktop-sidebar">

//         {/* BRAND */}

//         <div className="sidebar-brand">

//           <div className="sidebar-logo">
//             <Car size={25} />
//           </div>

//           <div>
//             <h1>Sho't Left</h1>
//             <span>Your Ride. Your City.</span>
//           </div>

//         </div>


//         {/* MAIN NAVIGATION */}

//         <nav className="sidebar-navigation">

//           <p className="sidebar-section-title">
//             MAIN MENU
//           </p>

//           {links.map((link) => (

//             <Link
//               key={link.name}
//               to={link.path}
//               className={
//                 `sidebar-link ${
//                   location.pathname === link.path
//                     ? 'sidebar-link-active'
//                     : ''
//                 }`
//               }
//             >

//               {link.icon}

//               <span>
//                 {link.name}
//               </span>

//             </Link>

//           ))}


//           {/* DIVIDER */}

//           <div className="sidebar-divider"></div>


//           {/* WALLET */}

//           <div className="sidebar-link wallet-row">

//             <Wallet size={18} />

//             <span>
//               Wallet
//             </span>

//             <strong>
//               R120
//             </strong>

//           </div>


//           {/* SETTINGS */}

//           <p className="sidebar-section-title settings-title">
//             ACCOUNT
//           </p>

//           <Link
//             to="/profile"
//             className={
//               `sidebar-link ${
//                 location.pathname === '/profile'
//                   ? 'sidebar-link-active'
//                   : ''
//               }`
//             }
//           >

//             <User size={18} />

//             <span>
//               Profile Settings
//             </span>

//           </Link>


//           <Link
//             to="#"
//             className="sidebar-link"
//           >

//             <HelpCircle size={18} />

//             <span>
//               Help & Support
//             </span>

//           </Link>

//         </nav>


//         {/* SIDEBAR FOOTER */}

//         <div className="sidebar-footer">

//           <div className="sidebar-user">

//             <div className="sidebar-avatar">
//               D
//             </div>

//             <div>
//               <strong>
//                 David
//               </strong>

//               <span>
//                 Premium User
//               </span>
//             </div>

//           </div>


//           <button
//             onClick={logout}
//             className="sidebar-logout"
//           >

//             <LogOut size={17} />

//             <span>
//               Log Out
//             </span>

//           </button>

//         </div>

//       </aside>


//       {/* ================= DESKTOP TOP BAR ================= */}

//       <header className="desktop-topbar">

//         <div className="topbar-search">

//           <Search size={17} />

//           <input
//             type="text"
//             placeholder="Search destinations, ranks, or places..."
//           />

//         </div>


//         <div className="topbar-right">

//           <button className="notification-button">

//             <Bell size={20} />

//             <span></span>

//           </button>


//           <div className="topbar-profile">

//             <div className="topbar-avatar">
//               D
//             </div>

//             <div className="topbar-profile-info">

//               <strong>
//                 David
//               </strong>

//               <span>
//                 Premium User
//               </span>

//             </div>

//             <ChevronDown size={15} />

//           </div>

//         </div>

//       </header>


//       {/* ================= MOBILE HEADER ================= */}

//       <header className="mobile-topbar">

//         <div className="mobile-brand">

//           <div className="mobile-logo">
//             <Car size={20} />
//           </div>

//           <strong>
//             Sho't Left
//           </strong>

//         </div>


//         <button className="mobile-notification">

//           <Bell size={21} />

//           <span></span>

//         </button>

//       </header>

//     </>
//   );
// }


// import {
//   Link,
//   useNavigate,
//   useLocation
// } from 'react-router-dom';

// import {
//   LayoutDashboard,
//   Car,
//   Ticket,
//   Layers,
//   History,
//   Star,
//   Wallet,
//   User,
//   HelpCircle,
//   LogOut,
//   Search,
//   Bell,
//   ChevronDown
// } from 'lucide-react';

// import '../Styling/Navbar.css';

// export default function Navbar({
//   isAuthenticated,
//   setIsAuthenticated,
//   walletBalance,
//   userProfile
// }) {

//   const navigate = useNavigate();
//   const location = useLocation();

//   if (!isAuthenticated) {
//     return null;
//   }

//   const links = [
//     {
//       name: 'Dashboard',
//       path: '/dashboard',
//       icon: <LayoutDashboard size={18} />
//     },
//     {
//       name: 'Book Ride',
//       path: '/booking-gateway',
//       icon: <Car size={18} />
//     },
//     {
//       name: 'My Pass',
//       path: '/payment-checkout',
//       icon: <Ticket size={18} />
//     },
//     {
//       name: 'Ranks',
//       path: '/rank-monitor',
//       icon: <Layers size={18} />
//     },
//     {
//       name: 'Ride History',
//       path: '/history',
//       icon: <History size={18} />
//     },
//     {
//       name: 'Saved Places',
//       path: '/saved-places',
//       icon: <Star size={18} />
//     }
//   ];

//   const logout = () => {
//     localStorage.removeItem('shotLeftAuthenticated');
//     localStorage.removeItem('shotLeftUser');
//     setIsAuthenticated(false);
//     navigate('/');
//   };

//   return (
//     <>

//       {/* ================= DESKTOP SIDEBAR ================= */}

//       <aside className="desktop-sidebar">

//         {/* BRAND */}

//         <div className="sidebar-brand">

//           <div className="sidebar-logo">
//             <Car size={25} />
//           </div>

//           <div>
//             <h1>Sho't Left</h1>
//             <span>Your Ride. Your City.</span>
//           </div>

//         </div>


//         {/* MAIN NAVIGATION */}

//         <nav className="sidebar-navigation">

//           <p className="sidebar-section-title">
//             MAIN MENU
//           </p>

//           {links.map((link) => (

//             <Link
//               key={link.name}
//               to={link.path}
//               className={
//                 `sidebar-link ${
//                   location.pathname === link.path
//                     ? 'sidebar-link-active'
//                     : ''
//                 }`
//               }
//             >

//               {link.icon}

//               <span>
//                 {link.name}
//               </span>

//             </Link>

//           ))}


//           {/* DIVIDER */}

//           <div className="sidebar-divider"></div>


//           {/* WALLET */}

//           <Link to="/profile" className="sidebar-link wallet-row" style={{ textDecoration: 'none' }}>

//             <Wallet size={18} />

//             <span>
//               Wallet
//             </span>

//             {/* DYNAMIC BALANCE METRIC */}
//             <strong>
//               R{walletBalance !== undefined ? walletBalance.toFixed(2) : '120.00'}
//             </strong>

//           </Link>


//           {/* SETTINGS */}

//           <p className="sidebar-section-title settings-title">
//             ACCOUNT
//           </p>

//           <Link
//             to="/profile"
//             className={
//               `sidebar-link ${
//                 location.pathname === '/profile'
//                   ? 'sidebar-link-active'
//                   : ''
//               }`
//             }
//           >

//             <User size={18} />

//             <span>
//               Profile Settings
//             </span>

//           </Link>


//           <Link
//             to="/profile"
//             className="sidebar-link"
//           >

//             <HelpCircle size={18} />

//             <span>
//               Help & Support
//             </span>

//           </Link>

//         </nav>


//         {/* SIDEBAR FOOTER */}

//         <div className="sidebar-footer">

//           <div className="sidebar-user">

//             {/* DYNAMIC USER AVATAR */}
//             <div className="sidebar-avatar">
//               {userProfile?.avatarLetter || 'D'}
//             </div>

//             <div>
//               {/* DYNAMIC USER PROFILE NAME */}
//               <strong>
//                 {userProfile?.username || 'David'}
//               </strong>

//               {/* DYNAMIC MEMBERSHIP TIER */}
//               <span>
//                 {userProfile?.tier || 'Premium User'}
//               </span>
//             </div>

//           </div>


//           <button
//             onClick={logout}
//             className="sidebar-logout"
//           >

//             <LogOut size={17} />

//             <span>
//               Log Out
//             </span>

//           </button>

//         </div>

//       </aside>


//       {/* ================= DESKTOP TOP BAR ================= */}

//       <header className="desktop-topbar">

//         <div className="topbar-search">

//           <Search size={17} />

//           <input
//             type="text"
//             placeholder="Search destinations, ranks, or places..."
//           />

//         </div>


//         <div className="topbar-right">

//           <button className="notification-button">

//             <Bell size={20} />

//             <span></span>

//           </button>


//           <div className="topbar-profile" style={{ cursor: 'pointer' }} onClick={() => navigate('/profile')}>

//             {/* DYNAMIC TOP AVATAR */}
//             <div className="topbar-avatar">
//               {userProfile?.avatarLetter || 'D'}
//             </div>

//             <div className="topbar-profile-info">

//               {/* DYNAMIC TOP PROFILE NAME */}
//               <strong>
//                 {userProfile?.username || 'David'}
//               </strong>

//               {/* DYNAMIC TOP PROFILE TIER */}
//               <span>
//                 {userProfile?.tier || 'Premium User'}
//               </span>

//             </div>

//             <ChevronDown size={15} />

//           </div>

//         </div>

//       </header>


//       {/* ================= MOBILE HEADER ================= */}

//       <header className="mobile-topbar">

//         <div className="mobile-brand" style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>

//           <div className="mobile-logo">
//             <Car size={20} />
//           </div>

//           <strong>
//             Sho't Left
//           </strong>

//         </div>


//         <button className="mobile-notification">

//           <Bell size={21} />

//           <span></span>

//         </button>

//       </header>

//     </>
//   );
// }


import { Link, useNavigate, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  Car,
  Ticket,
  Layers,
  History,
  Star,
  Wallet,
  User,
  HelpCircle,
  LogOut,
  Search,
  Bell,
  ChevronDown
} from 'lucide-react';

import '../Styling/Navbar.css';

export default function Navbar({
  isAuthenticated,
  setIsAuthenticated,
  walletBalance,
  userProfile
}) {
  const navigate = useNavigate();
  const location = useLocation();

  if (!isAuthenticated) {
    return null;
  }

  const links = [
    { name: 'Dashboard', path: '/dashboard', icon: <LayoutDashboard size={18} /> },
    { name: 'Book Ride', path: '/booking-gateway', icon: <Car size={18} /> },
    { name: 'My Pass', path: '/payment-checkout', icon: <Ticket size={18} /> },
    { name: 'Ranks', path: '/rank-monitor', icon: <Layers size={18} /> },
    { name: 'Ride History', path: '/history', icon: <History size={18} /> },
    { name: 'Saved Places', path: '/saved-places', icon: <Star size={18} /> }
  ];

  const logout = () => {
    localStorage.removeItem('shotLeftAuthenticated');
    localStorage.removeItem('shotLeftUser');
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="desktop-sidebar">
        <div className="sidebar-brand">
          <div className="sidebar-logo"><Car size={25} /></div>
          <div>
            <h1>Sho't Left</h1>
            <span>Your Ride. Your City.</span>
          </div>
        </div>

        <nav className="sidebar-navigation">
          <p className="sidebar-section-title">MAIN MENU</p>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`sidebar-link ${location.pathname === link.path ? 'sidebar-link-active' : ''}`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}

          <div className="sidebar-divider"></div>

          {/* WALLET DYNAMIC BALANCES METRICS NODES */}
          <div className="sidebar-link wallet-row" onClick={() => navigate('/profile')} style={{ cursor: 'pointer' }}>
            <Wallet size={18} />
            <span>Wallet</span>
            <strong>R{walletBalance !== undefined ? walletBalance.toFixed(2) : '120.00'}</strong>
          </div>

          <p className="sidebar-section-title settings-title">ACCOUNT</p>
          <Link to="/profile" className={`sidebar-link ${location.pathname === '/profile' ? 'sidebar-link-active' : ''}`}>
            <User size={18} />
            <span>Profile Settings</span>
          </Link>

          <Link to="/profile" className="sidebar-link">
            <HelpCircle size={18} />
            <span>Help & Support</span>
          </Link>
        </nav>

        {/* SIDEBAR FOOTER DYNAMIC BLOCK */}
        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="sidebar-avatar">{userProfile?.avatarLetter || 'C'}</div>
            <div>
              <strong>{userProfile?.username || 'Commuter'}</strong>
              <span>{userProfile?.tier || 'Premium User'}</span>
            </div>
          </div>
          <button onClick={logout} className="sidebar-logout">
            <LogOut size={17} />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* ================= DESKTOP TOP BAR ================= */}
      <header className="desktop-topbar">
        <div className="topbar-search">
          <Search size={17} />
          <input type="text" placeholder="Search destinations, ranks, or places..." />
        </div>

        <div className="topbar-right">
          <button className="notification-button">
            <Bell size={20} />
            <span></span>
          </button>

          <div className="topbar-profile" style={{ cursor: 'pointer' }} onClick={() => navigate('/profile')}>
            <div className="topbar-avatar">{userProfile?.avatarLetter || 'C'}</div>
            <div className="topbar-profile-info">
              <strong>{userProfile?.username || 'Commuter'}</strong>
              <span>{userProfile?.tier || 'Premium User'}</span>
            </div>
            <ChevronDown size={15} />
          </div>
        </div>
      </header>

      {/* ================= MOBILE HEADER ================= */}
      <header className="mobile-topbar">
        <div className="mobile-brand" onClick={() => navigate('/dashboard')} style={{ cursor: 'pointer' }}>
          <div className="mobile-logo"><Car size={20} /></div>
          <strong>Sho't Left</strong>
        </div>
        <button className="mobile-notification">
          <Bell size={21} />
          <span></span>
        </button>
      </header>
    </>
  );
}
