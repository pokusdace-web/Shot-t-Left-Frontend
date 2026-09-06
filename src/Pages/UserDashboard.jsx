// import { Link } from 'react-router-dom';
// import { Layers, Ticket, History, Star, User, Settings, Bell, Menu } from 'lucide-react';
// import '../Styling/UserDashboard.css';

// export default function UserDashboard() {
//   return (
//     <div className="hf-page-viewport-container">
//       <div className="widescreen-dash-layout">
        
//         {/* Top Header Row Panel */}
//         <div className="dash-top-header-row">
//           <div className="hf-dash-greeting">
//             <h2>Good afternoon, David! 👋</h2>
//             <p>Where are you going today? Access your active transit panels below.</p>
//           </div>
//           <div className="dash-action-icons">
//             <Bell size={22} className="header-interactive-icon" />
//             <Menu size={22} className="header-interactive-icon" />
//           </div>
//         </div>

//         {/* Dynamic Highlight Horizontal Banner */}
//         <div className="widescreen-banner-card">
//           <div className="hf-banner-text">
//             <h3>Ready to head out? Book an Affordable Ride</h3>
//             <p>Schedule a cheap, optimized Point-to-Point commute vector directly to major South African transport hubs.</p>
//             <Link to="/booking-gateway" className="hf-banner-btn">BOOK A RIDE NOW →</Link>
//           </div>
//           <div className="hf-banner-image">  </div>
//         </div>

//         {/* High-Fidelity Multi-Column Layout Grid */}
//         <div className="widescreen-feature-grid">
//           <Link to="/rank-monitor" className="hf-grid-item">
//             <Layers size={24} className="grid-icon" />
//             <div>
//               <h4>Rank Monitor</h4>
//               <p>Check live queues, vehicle capacities, and wait metrics at local taxi ranks.</p>
//             </div>
//           </Link>

//           <Link to="/payment-checkout" className="hf-grid-item">
//             <Ticket size={24} className="grid-icon" />
//             <div>
//               <h4>My Boarding Pass</h4>
//               <p>View your active transaction vouchers and generated barcode reference keys.</p>
//             </div>
//           </Link>

//           <Link to="/history" className="hf-grid-item">
//             <History size={24} className="grid-icon" />
//             <div>
//               <h4>Ride History</h4>
//               <p>Review your complete database ledger of past trips and transport fares.</p>
//             </div>
//           </Link>

//           <Link to="/saved-places" className="hf-grid-item">
//             <Star size={24} className="grid-icon" />
//             <div>
//               <h4>Saved Places</h4>
//               <p>Configure your customized frequent transport nodes and home stations.</p>
//             </div>
//           </Link>

//           <Link to="/profile" className="hf-grid-item">
//             <User size={24} className="grid-icon" />
//             <div>
//               <h4>Profile Settings</h4>
//               <p>Manage your cryptographically secured account credentials and email parameters.</p>
//             </div>
//           </Link>

//           <div className="hf-grid-item placeholder-disabled">
//             <Settings size={24} className="grid-icon" />
//             <div>
//               <h4>System preferences</h4>
//               <p>App theme configuration parameters and advanced layout options coming soon.</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }




import { Link } from 'react-router-dom';

import {
  Layers,
  Ticket,
  History,
  Star,
  User,
  MapPin,
  Flag,
  Minus,
  Plus,
  Tag,
  Clock,
  Car,
  Wallet,
  Home,
  Navigation,
  QrCode,
  ChevronRight
} from 'lucide-react';

import '../Styling/UserDashboard.css';

export default function UserDashboard() {

  return (

    <main className="user-dashboard">


      {/* =================================================
          PAGE INTRO
      ================================================= */}

      <section className="dashboard-intro">

        <div>

          <p className="dashboard-eyebrow">
            DASHBOARD
          </p>

          <h2>
            Good afternoon, David! 👋
          </h2>

          <p className="dashboard-description">
            Ready for your next trip? Let's get you moving.
          </p>

        </div>


        <div className="dashboard-stats">

          <div className="stat-item">

            <span className="stat-icon">
              ☀
            </span>

            <div>
              <strong>24°C</strong>
              <small>Johannesburg</small>
            </div>

          </div>


          <div className="stat-item">

            <Clock size={18} />

            <div>
              <strong>13:59</strong>
              <small>Today</small>
            </div>

          </div>


          <div className="stat-item">

            <MapPin size={18} />

            <div>
              <strong>Soweto</strong>
              <small>Current location</small>
            </div>

          </div>


          <div className="stat-item">

            <Wallet size={18} />

            <div>
              <strong>R120.00</strong>
              <small>Wallet balance</small>
            </div>

          </div>

        </div>

      </section>



      {/* =================================================
          MAIN DASHBOARD
      ================================================= */}

      <section className="dashboard-main-grid">


        {/* =================================================
            BOOK RIDE
        ================================================= */}

        <div className="booking-card">

          <div className="card-header">

            <div>

              <span className="card-label">
                GET MOVING
              </span>

              <h3>
                Book a Ride
              </h3>

              <p>
                Affordable rides to major transport hubs.
              </p>

            </div>


            <span className="quick-book-badge">
              ⚡ Quick Book
            </span>

          </div>


          {/* FROM */}

          <div className="location-field">

            <div className="location-field-icon">
              <MapPin size={18} />
            </div>

            <div className="location-field-content">

              <span>
                FROM
              </span>

              <strong>
                Soweto, Orlando East
              </strong>

            </div>

            <Navigation
              size={17}
              className="field-action"
            />

          </div>


          {/* DESTINATION */}

          <div className="location-field">

            <div className="location-field-icon destination-icon">
              <Flag size={18} />
            </div>

            <div className="location-field-content">

              <span>
                DESTINATION
              </span>

              <strong>
                Johannesburg CBD
              </strong>

            </div>

            <ChevronRight
              size={17}
              className="field-action"
            />

          </div>


          {/* BOTTOM BOOKING INFO */}

          <div className="booking-bottom-row">


            <div className="seat-selector">

              <span>
                SEATS
              </span>

              <div className="seat-controls">

                <button>
                  <Minus size={14} />
                </button>

                <strong>
                  2
                </strong>

                <button>
                  <Plus size={14} />
                </button>

              </div>

            </div>


            <div className="fare-info">

              <span>
                ESTIMATED FARE
              </span>

              <strong>
                <Tag size={16} />
                R25 – R35
              </strong>

            </div>

          </div>


          <Link
            to="/booking-gateway"
            className="primary-book-button"
          >

            BOOK RIDE NOW

            <span>
              →
            </span>

          </Link>

        </div>



        {/* =================================================
            ACTIVE PASS
        ================================================= */}

        <div className="active-pass-card">

          <div className="pass-card-header">

            <div>

              <span className="card-label">
                YOUR TICKET
              </span>

              <h3>
                Active Pass
              </h3>

            </div>

            <span className="valid-badge">
              VALID
            </span>

          </div>


          <div className="pass-route">

            <div>
              <span>
                FROM
              </span>

              <strong>
                Orlando East
              </strong>
            </div>

            <span className="route-arrow">
              →
            </span>

            <div>
              <span>
                TO
              </span>

              <strong>
                Johannesburg CBD
              </strong>
            </div>

          </div>


          <div className="pass-time">
            Today · 14:30
          </div>


          <div className="pass-ticket">

            <div className="pass-details">

              <div>
                <span>SEAT</span>
                <strong>04</strong>
              </div>

              <div>
                <span>TYPE</span>
                <strong>Single Trip</strong>
              </div>

            </div>


            <div className="qr-container">
              <QrCode size={72} />
            </div>

          </div>


          <p className="pass-instruction">
            Show this QR code to the driver or inspector.
          </p>


          <Link
            to="/payment-checkout"
            className="pass-button"
          >

            <Ticket size={16} />

            VIEW FULL PASS

          </Link>

        </div>



        {/* =================================================
            NEARBY RANKS
        ================================================= */}

        <div className="ranks-card">

          <div className="section-header">

            <div>

              <div className="section-title-row">

                <h3>
                  Nearby Ranks
                </h3>

                <span className="live-badge">
                  ● LIVE
                </span>

              </div>

              <p>
                Real-time queue and vehicle updates
              </p>

            </div>


            <Link to="/rank-monitor">
              View all →
            </Link>

          </div>


          <div className="rank-list">


            {/* RANK 1 */}

            <div className="rank-item">

              <div className="rank-top">

                <div className="rank-name">

                  <span className="rank-status green"></span>

                  <strong>
                    Orlando East Taxi Rank
                  </strong>

                </div>

                <span className="queue-status low">
                  LOW QUEUE
                </span>

              </div>


              <div className="rank-meta">

                <span>
                  <Car size={14} />
                  12 vehicles
                </span>

                <span>
                  <Clock size={14} />
                  ~5 min wait
                </span>

              </div>

            </div>


            {/* RANK 2 */}

            <div className="rank-item">

              <div className="rank-top">

                <div className="rank-name">

                  <span className="rank-status yellow"></span>

                  <strong>
                    Bree Taxi Rank
                  </strong>

                </div>

                <span className="queue-status medium">
                  MODERATE
                </span>

              </div>


              <div className="rank-meta">

                <span>
                  <Car size={14} />
                  7 vehicles
                </span>

                <span>
                  <Clock size={14} />
                  ~12 min wait
                </span>

              </div>

            </div>


            {/* RANK 3 */}

            <div className="rank-item">

              <div className="rank-top">

                <div className="rank-name">

                  <span className="rank-status red"></span>

                  <strong>
                    Noord Street Rank
                  </strong>

                </div>

                <span className="queue-status high">
                  HIGH QUEUE
                </span>

              </div>


              <div className="rank-meta">

                <span>
                  <Car size={14} />
                  3 vehicles
                </span>

                <span>
                  <Clock size={14} />
                  ~20 min wait
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =================================================
          LOWER DASHBOARD
      ================================================= */}

      <section className="dashboard-lower-grid">


        {/* QUICK ACCESS */}

        <div className="quick-access-card">

          <div className="section-header">

            <div>

              <h3>
                Quick Access
              </h3>

              <p>
                Your most-used transport tools
              </p>

            </div>

          </div>


          <div className="quick-access-grid">


            <Link
              to="/rank-monitor"
              className="quick-item"
            >

              <div className="quick-item-icon">
                <Layers size={19} />
              </div>

              <div>
                <strong>
                  Rank Monitor
                </strong>

                <p>
                  Check live queues and wait times.
                </p>
              </div>

              <ChevronRight size={17} />

            </Link>


            <Link
              to="/payment-checkout"
              className="quick-item"
            >

              <div className="quick-item-icon">
                <Ticket size={19} />
              </div>

              <div>
                <strong>
                  My Boarding Pass
                </strong>

                <p>
                  View your active passes.
                </p>
              </div>

              <ChevronRight size={17} />

            </Link>


            <Link
              to="/history"
              className="quick-item"
            >

              <div className="quick-item-icon">
                <History size={19} />
              </div>

              <div>
                <strong>
                  Ride History
                </strong>

                <p>
                  View your previous trips.
                </p>
              </div>

              <ChevronRight size={17} />

            </Link>


            <Link
              to="/saved-places"
              className="quick-item"
            >

              <div className="quick-item-icon">
                <Star size={19} />
              </div>

              <div>
                <strong>
                  Saved Places
                </strong>

                <p>
                  Your favorite destinations.
                </p>
              </div>

              <ChevronRight size={17} />

            </Link>


            <Link
              to="/profile"
              className="quick-item"
            >

              <div className="quick-item-icon">
                <User size={19} />
              </div>

              <div>
                <strong>
                  Profile Settings
                </strong>

                <p>
                  Manage your account.
                </p>
              </div>

              <ChevronRight size={17} />

            </Link>


            <div className="quick-item">

              <div className="quick-item-icon">
                <Wallet size={19} />
              </div>

              <div>
                <strong>
                  Wallet
                </strong>

                <p>
                  Manage your balance.
                </p>
              </div>

              <ChevronRight size={17} />

            </div>

          </div>

        </div>



        {/* RECENT TRIPS */}

        <div className="recent-trips-card">

          <div className="section-header">

            <div>

              <h3>
                Recent Trips
              </h3>

              <p>
                Your latest journeys
              </p>

            </div>

            <Link to="/history">
              View all →
            </Link>

          </div>


          <div className="trip-list">


            <div className="trip-item">

              <span className="trip-status green"></span>

              <div className="trip-info">

                <strong>
                  Orlando East → CBD
                </strong>

                <small>
                  22 Aug · 14:30
                </small>

              </div>

              <strong className="trip-price">
                R25
              </strong>

              <ChevronRight size={16} />

            </div>


            <div className="trip-item">

              <span className="trip-status yellow"></span>

              <div className="trip-info">

                <strong>
                  Soweto → Bree Rank
                </strong>

                <small>
                  21 Aug · 08:15
                </small>

              </div>

              <strong className="trip-price">
                R18
              </strong>

              <ChevronRight size={16} />

            </div>


            <div className="trip-item">

              <span className="trip-status green"></span>

              <div className="trip-info">

                <strong>
                  Orlando East → Park Station
                </strong>

                <small>
                  20 Aug · 17:45
                </small>

              </div>

              <strong className="trip-price">
                R22
              </strong>

              <ChevronRight size={16} />

            </div>

          </div>


          <Link
            to="/history"
            className="history-button"
          >

            <History size={16} />

            VIEW ALL HISTORY

          </Link>

        </div>



        {/* SAVED PLACES */}

        <div className="saved-places-card">

          <div className="section-header">

            <div>

              <h3>
                Saved Places
              </h3>

              <p>
                Your regular destinations
              </p>

            </div>

            <Link to="/saved-places">
              View all →
            </Link>

          </div>


          <div className="saved-place-list">


            <div className="saved-place">

              <Star size={17} />

              <div>
                <strong>
                  Orlando East Taxi Rank
                </strong>

                <small>
                  Soweto
                </small>
              </div>

            </div>


            <div className="saved-place">

              <Star size={17} />

              <div>
                <strong>
                  Bree Taxi Rank
                </strong>

                <small>
                  Johannesburg CBD
                </small>
              </div>

            </div>


            <div className="saved-place">

              <Star size={17} />

              <div>
                <strong>
                  Park Station
                </strong>

                <small>
                  Johannesburg
                </small>
              </div>

            </div>


            <div className="saved-place">

              <Star size={17} />

              <div>
                <strong>
                  Noord Street Rank
                </strong>

                <small>
                  Johannesburg
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =================================================
          WEEKLY PASS PROMOTION
      ================================================= */}

      <section className="weekly-pass-banner">

        <div className="weekly-pass-icon">
          <Ticket size={25} />
        </div>


        <div className="weekly-pass-text">

          <span>
            SAVE MORE
          </span>

          <h3>
            Get 10% off with a Weekly Digital Pass
          </h3>

          <p>
            Travel more and spend less on your daily commute.
          </p>

        </div>


        <Link
          to="/payment-checkout"
          className="weekly-pass-button"
        >
          GET WEEKLY PASS →
        </Link>

      </section>



      {/* =================================================
          MOBILE BOTTOM NAVIGATION
      ================================================= */}

      <nav className="mobile-bottom-nav">

        <Link
          to="/dashboard"
          className="mobile-nav-item mobile-nav-active"
        >

          <Home size={20} />

          <span>
            Home
          </span>

        </Link>


        <Link
          to="/booking-gateway"
          className="mobile-nav-item"
        >

          <Car size={20} />

          <span>
            Book
          </span>

        </Link>


        <Link
          to="/payment-checkout"
          className="mobile-nav-item mobile-pass-button"
        >

          <QrCode size={22} />

          <span>
            Pass
          </span>

        </Link>


        <Link
          to="/rank-monitor"
          className="mobile-nav-item"
        >

          <Navigation size={20} />

          <span>
            Ranks
          </span>

        </Link>


        <Link
          to="/profile"
          className="mobile-nav-item"
        >

          <User size={20} />

          <span>
            Profile
          </span>

        </Link>

      </nav>

    </main>
  );
}