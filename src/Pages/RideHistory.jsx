import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Calendar,
  MapPin,
  Ticket,
  ArrowRight,
  History as HistoryIcon
} from 'lucide-react';

import '../Styling/RideHistory.css';

export default function RideHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3001/api/bookings')
      .then(res => res.json())
      .then(data => setHistory(data))
      .catch(err =>
        console.error("History fetch error:", err)
      );

  }, []);


  return (
    <div className="history-page">

      {/* HEADER */}

      <div className="history-page-header">

        <div>

          <div className="history-eyebrow">
            <HistoryIcon size={14} />
            TRIP ACTIVITY
          </div>

          <h1>Ride History</h1>

          <p>
            Review your previous trips, routes and
            transport payments.
          </p>

        </div>

        <Link
          to="/booking-gateway"
          className="history-book-btn"
        >
          Book a ride
          <ArrowRight size={16} />
        </Link>

      </div>


      {/* CONTENT */}

      {history.length === 0 ? (

        <div className="history-empty-card">

          <div className="empty-icon">
            <Ticket size={24} />
          </div>

          <h2>No rides yet</h2>

          <p>
            Your completed rides will appear here after
            you book and complete a journey.
          </p>

          <Link
            to="/booking-gateway"
            className="empty-book-btn"
          >
            Book your first ride
            <ArrowRight size={15} />
          </Link>

        </div>

      ) : (

        <div className="history-layout">

          {/* SUMMARY */}

          <div className="history-summary-card">

            <div>
              <span>Total trips</span>
              <strong>{history.length}</strong>
            </div>

            <div className="summary-line"></div>

            <div>
              <span>Recent activity</span>
              <strong>Active</strong>
            </div>

          </div>


          {/* TRIP LIST */}

          <div className="history-list">

            <div className="history-list-header">
              <h2>Previous journeys</h2>
              <span>{history.length} trips</span>
            </div>


            {history.map((trip, index) => (

              <div
                key={index}
                className="history-trip-card"
              >

                {/* TOP */}

                <div className="history-trip-top">

                  <div className="history-date">

                    <Calendar size={14} />

                    <span>
                      {trip.date || 'Recent trip'}
                    </span>

                  </div>

                  <span className="paid-badge">
                    PAID
                  </span>

                </div>


                {/* ROUTE */}

                <div className="history-route">

                  <div className="history-route-point">

                    <span className="history-point pickup"></span>

                    <div>
                      <span>FROM</span>
                      <strong>
                        {trip.origin || 'Current Location'}
                      </strong>
                    </div>

                  </div>


                  <div className="history-route-line"></div>


                  <div className="history-route-point">

                    <span className="history-point destination"></span>

                    <div>
                      <span>TO</span>
                      <strong>
                        {trip.destination || 'Destination'}
                      </strong>
                    </div>

                  </div>

                </div>


                {/* BOTTOM INFORMATION */}

                <div className="history-trip-footer">

                  <div className="history-info">

                    <Ticket size={14} />

                    <div>
                      <span>Ticket</span>
                      <strong>
                        {trip.ticketCode || 'Pending'}
                      </strong>
                    </div>

                  </div>


                  <div className="history-info">

                    <div>
                      <span>Reference</span>
                      <strong>
                        {trip.reference || 'N/A'}
                      </strong>
                    </div>

                  </div>


                  <div className="history-fare">

                    <span>Fare</span>

                    <strong>
                      R{trip.totalCost || 0}.00
                    </strong>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      )}

    </div>
  );
}