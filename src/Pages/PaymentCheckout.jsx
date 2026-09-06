// import { useState } from 'react';
// import { useNavigate, Navigate } from 'react-router-dom';
// import { CreditCard, Wallet, CheckCircle, Ticket, ArrowLeft, ShieldCheck } from 'lucide-react';
// import confetti from 'canvas-confetti';
// import '../Styling/PaymentCheckout.css';

// export default function PaymentCheckout({ globalBooking }) {
//   const navigate = useNavigate();
//   const [paymentChannel, setPaymentChannel] = useState('Instant EFT');
//   const [ticketIssued, setTicketIssued] = useState(null);

//   if (!globalBooking || !globalBooking.destination) {
//     return <Navigate to="/dashboard" replace />;
//   }

//   const handleProcessTransaction = async (e) => {
//     e.preventDefault();
//     const mockRef = "SLT-" + Math.floor(1000 + Math.random() * 9000);
//     const mockTicketCode = "TCK-" + Math.floor(10000 + Math.random() * 90000);
//     const todayDate = new Date().toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', year: 'numeric' });

//     const tripPayload = {
//       origin: globalBooking.origin,
//       destination: globalBooking.destination,
//       seats: globalBooking.seats,
//       totalCost: globalBooking.totalCost,
//       reference: mockRef,
//       ticketCode: mockTicketCode,
//       date: todayDate
//     };

//     try {
//       await fetch('http://localhost:3001/api/bookings', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(tripPayload)
//       });
      
//       setTicketIssued(tripPayload);
//       confetti({ particleCount: 100, spread: 60, colors: ['#E5BA93', '#00e676', '#ffffff'] });
//     } catch (err) {
//       console.error("Database tracking error:", err);
//     }
//   };

//   return (
//     <div className="checkout-page-wrapper">
//       <div className="checkout-card-panel">
//         {!ticketIssued ? (
//           <div>
//             <h2>Secure Checkout</h2>
//             <p className="subtitle">Confirm payment parameters to lock down your ride allocation</p>
//             <div className="booking-summary-invoice">
//               <p>Journey: <strong>{globalBooking.origin} ➔ {globalBooking.destination}</strong></p>
//               <p>Seats: <span>{globalBooking.seats} Passenger(s)</span></p>
//               <div className="invoice-total-row">Total: <span className="price-accent-green">R{globalBooking.totalCost}.00</span></div>
//             </div>
//             <form onSubmit={handleProcessTransaction}>
//               <div className="checkout-input-group">
//                 <label>Select Payment Channel</label>
//                 <select value={paymentChannel} onChange={(e) => setPaymentChannel(e.target.value)}>
//                   <option value="Instant EFT">Instant EFT Gateway</option>
//                   <option value="Cheque Card">Debit / Cheque Card</option>
//                 </select>
//               </div>
//               <button type="submit" className="authorize-transaction-btn"><CreditCard size={16} /> Authorize Payment</button>
//             </form>
//           </div>
//         ) : (
//           <div className="ticket-success-wrapper">
//             <CheckCircle size={32} style={{ color: '#00E676' }} />
//             <h3>Transaction Approved</h3>
//             <div className="digital-voucher-card">
//               <div className="voucher-barcode-area">
//                 <div className="barcode-bars">|||| | ||||| | || |||| | |||</div>
//                 <div className="barcode-numeric">{ticketIssued.ticketCode}</div>
//               </div>
//               <div className="voucher-body-grid">
//                 <div className="voucher-grid-item"><label>Booking Reference</label><span>{ticketIssued.reference}</span></div>
//                 <div className="voucher-grid-item" style={{ textAlign: 'right' }}><label>Date</label><span>{ticketIssued.date}</span></div>
//                 <div className="voucher-grid-item"><label>Route Trajectory</label><span>{ticketIssued.destination}</span></div>
//                 <div className="voucher-grid-item" style={{ textAlign: 'right' }}><label>Total Fare</label><span>R{ticketIssued.totalCost}.00</span></div>
//               </div>
//             </div>
//             <button onClick={() => navigate('/dashboard')} className="return-hub-btn">Return to Dashboard</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


import { Link } from 'react-router-dom';
import { ArrowLeft, Ticket, ShieldCheck, QrCode } from 'lucide-react';
import '../Styling/PaymentCheckout.css';

export default function PaymentCheckout({ globalBooking, userProfile }) {
  return (
    <div className="user-dashboard">
      <div className="dashboard-intro">
        <span className="dashboard-eyebrow">TRANSACTION GATEWAY</span>
        <h2>My Boarding Pass</h2>
        <p className="dashboard-description">Show this digital encryption pass token card to the rank inspector or loading marshal.</p>
      </div>

      <div className="dashboard-main-grid" style={{ gridTemplateColumns: '1.2fr 1fr', marginTop: '24px' }}>
        {/* PHYSICAL TRANSACTION PASS CARD BOX */}
        <div style={{ background: '#101621', border: '1px solid #202938', padding: '24px', borderRadius: '12px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #202938', paddingBottom: '16px' }}>
            <div>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', display: 'block' }}>PASS HOLDER COMMUTER</span>
              {/* ✅ HARDCODED PROFILE IDENTIFIERS RESOLVED DYNAMICALLY */}
              <strong style={{ fontSize: '16px', color: '#FFF' }}>{userProfile?.username?.toUpperCase() || 'COMMUTER'}</strong>
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', display: 'block', marginTop: '2px' }}>{userProfile?.email}</span>
            </div>
            <div style={{ background: 'rgba(201,155,107,0.1)', padding: '6px 12px', borderRadius: '6px', height: 'fit-content' }}>
              <span style={{ color: '#c99b6b', fontSize: '11px', fontWeight: '700' }}>VALID TICKET</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>DESTINATION STATIONS</span>
              <strong style={{ display: 'block', fontSize: '14px', color: '#FFF', marginTop: '4px' }}>{globalBooking?.destination || 'Not Configured'}</strong>
            </div>
            <div>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>PASSENGER SEATS</span>
              <strong style={{ display: 'block', fontSize: '14px', color: '#FFF', marginTop: '4px' }}>{globalBooking?.seats || 1} Seat(s)</strong>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #202938', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>TOTAL CASH DEBITED</span>
              <h2 style={{ color: '#00E676', margin: '4px 0 0 0', fontWeight: '800' }}>R {globalBooking?.totalCost || 0}.00</h2>
            </div>
            <div style={{ background: '#FFF', padding: '8px', borderRadius: '6px' }}>
              {/* Dynamic Mock pass validation grid matrices tracking overlay layout links */}
              <QrCode size={64} color="#000" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

