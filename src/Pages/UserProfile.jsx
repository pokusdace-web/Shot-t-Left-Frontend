// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { User, Mail, Shield, ShieldAlert, PlusCircle, CreditCard } from 'lucide-react';
// import '../Styling/UserProfile.css';

// export default function UserProfile({ 
//   userProfile, 
//   setUserProfile, 
//   walletBalance, 
//   setWalletBalance 
// }) {
//   const [nameInput, setNameInput] = useState(userProfile?.username || 'David');
//   const [emailInput, setEmailInput] = useState(userProfile?.email || 'david@domain.co.za');
//   const [topUpAmount, setTopUpAmount] = useState('');
//   const [isEditing, setIsEditing] = useState(false);

//   const handleUpdateProfile = (e) => {
//     e.preventDefault();
//     if (typeof setUserProfile === 'function') {
//       setUserProfile({
//         ...userProfile,
//         username: nameInput,
//         email: emailInput,
//         avatarLetter: nameInput.charAt(0).toUpperCase()
//       });
//       setIsEditing(false);
//       alert('Profile details successfully updated!');
//     }
//   };

//   const handleTopUpWallet = (e) => {
//     e.preventDefault();
//     const amount = parseFloat(topUpAmount);
//     if (!isNaN(amount) && amount > 0) {
//       if (typeof setWalletBalance === 'function') {
//         setWalletBalance(prev => prev + amount);
//         setTopUpAmount('');
//         alert(`R ${amount.toFixed(2)} successfully loaded into your transport wallet!`);
//       }
//     } else {
//       alert('Please enter a valid amount.');
//     }
//   };

//   return (
//     <div className="hf-feature-wrapper" style={{ padding: '24px', background: '#070A13', minHeight: '100vh', display: 'flex', flexDirection: 'column', gap: '24px' }}>
//       <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', maxWidth: '1200px', width: '100%', margin: '0 auto' }}>
        
//         {/* LEFT COLUMN: USER PROFILE DATA CONTROL */}
//         <div className="hf-feature-card" style={{ height: 'fit-content' }}>
//           <Link to="/dashboard" className="hf-back-arrow">←</Link>
//           <h2>My Profile</h2>
//           <p className="subtitle">Manage your personal commuter access ledger</p>

//           {!isEditing ? (
//             <div className="profile-details-box">
//               <div className="profile-item-row">
//                 <User size={18} className="profile-icon" />
//                 <div>
//                   <label>Username</label>
//                   <p>{userProfile?.username || 'David'}</p>
//                 </div>
//               </div>

//               <div className="profile-item-row">
//                 <Mail size={18} className="profile-icon" />
//                 <div>
//                   <label>Email Address</label>
//                   <p>{userProfile?.email || 'david@domain.co.za'}</p>
//                 </div>
//               </div>

//               <div className="profile-item-row">
//                 <Shield size={18} className="profile-icon" />
//                 <div>
//                   <label>Security Rank Tier</label>
//                   <p>{userProfile?.tier || 'Verified Transit Commuter'}</p>
//                 </div>
//               </div>

//               <button 
//                 type="button" 
//                 onClick={() => setIsEditing(true)}
//                 style={{ width: '100%', padding: '12px', background: 'transparent', border: '1px solid #E5BA93', color: '#E5BA93', borderRadius: '8px', fontWeight: '700', cursor: 'pointer', marginTop: '16px' }}
//               >
//                 EDIT PROFILE DETAILS
//               </button>
//             </div>
//           ) : (
//             <form onSubmit={handleUpdateProfile} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
//               <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//                 <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: '700' }}>USERNAME</label>
//                 <input 
//                   type="text" 
//                   value={nameInput} 
//                   onChange={(e) => setNameInput(e.target.value)}
//                   style={{ background: '#151C2C', border: '1px solid #1F283D', padding: '12px', borderRadius: '8px', color: '#FFF', outline: 'none' }}
//                   required
//                 />
//               </div>

//               <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
//                 <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: '700' }}>EMAIL ADDRESS</label>
//                 <input 
//                   type="email" 
//                   value={emailInput} 
//                   onChange={(e) => setEmailInput(e.target.value)}
//                   style={{ background: '#151C2C', border: '1px solid #1F283D', padding: '12px', borderRadius: '8px', color: '#FFF', outline: 'none' }}
//                   required
//                 />
//               </div>

//               <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
//                 <button type="submit" style={{ flex: 1, padding: '12px', background: '#E5BA93', color: '#0E131F', border: 'none', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>
//                   SAVE CHANGES
//                 </button>
//                 <button type="button" onClick={() => setIsEditing(false)} style={{ flex: 1, padding: '12px', background: '#151C2C', border: '1px solid #1F283D', color: '#FFF', borderRadius: '8px', fontWeight: '700', cursor: 'pointer' }}>
//                   CANCEL
//                 </button>
//               </div>
//             </form>
//           )}

//           <div className="security-notice-badge" style={{ marginTop: '24px' }}>
//             <ShieldAlert size={16} />
//             <span>Password fields are hashed safely with 10-round bcrypt cryptography.</span>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: INTERACTIVE WALLET MANAGEMENT TERMINAL */}
//         <div className="hf-feature-card" style={{ height: 'fit-content', background: '#0E131F', border: '1px solid #1F283D', padding: '24px', borderRadius: '16px' }}>
//           <h2>Transit Wallet</h2>
//           <p className="subtitle">Load funds and review smart transit balance points</p>

//           <div style={{ background: 'linear-gradient(135deg, #151C2C 0%, #0A0F1D 100%)', border: '1px solid #E5BA93', padding: '24px', borderRadius: '14px', display: 'flex', flexDirection: 'column', gap: '28px', margin: '20px 0' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//               <span style={{ fontSize: '11px', fontWeight: '700', color: '#E5BA93', letterSpacing: '1px' }}>SHO'T LEFT CARD</span>
//               <CreditCard size={20} color="#E5BA93" />
//             </div>
//             <div>
//               <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', fontWeight: '700' }}>AVAILABLE BALANCE</span>
//               <h1 style={{ fontSize: '32px', margin: '4px 0 0 0', fontWeight: '800', color: '#FFF' }}>R {walletBalance !== undefined ? walletBalance.toFixed(2) : '120.00'}</h1>
//             </div>
//             <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: '600' }}>
//               <span>COMMUTER: {userProfile?.username?.toUpperCase() || 'DAVID'}</span>
//               <span>STATUS: ACTIVE</span>
//             </div>
//           </div>

//           <form onSubmit={handleTopUpWallet} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//             <label style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', fontWeight: '700' }}>TOP UP AMOUNT (ZAR)</label>
//             <input 
//               type="number" 
//               value={topUpAmount}
//               onChange={(e) => setTopUpAmount(e.target.value)}
//               placeholder="e.g. 50" 
//               style={{ background: '#151C2C', border: '1px solid #1F283D', padding: '14px', borderRadius: '10px', color: '#FFF', outline: 'none', fontSize: '15px' }}
//               min="1"
//               required
//             />
//             <button type="submit" style={{ background: '#E5BA93', color: '#0E131F', border: 'none', padding: '14px', borderRadius: '10px', fontWeight: '700', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
//               <PlusCircle size={16} /> LOAD FUNDS ONTO CARD
//             </button>
//           </form>
//         </div>

//       </div>
//     </div>
//   );
// }



import { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Mail, Shield, ShieldAlert, PlusCircle, CreditCard } from 'lucide-react';
import '../Styling/UserProfile.css';

export default function UserProfile({ 
  userProfile, 
  setUserProfile, 
  walletBalance, 
  setWalletBalance 
}) {
  const [nameInput, setNameInput] = useState(userProfile?.username || 'Commuter');
  const [emailInput, setEmailInput] = useState(userProfile?.email || 'user@domain.co.za');
  const [topUpAmount, setTopUpAmount] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    if (typeof setUserProfile === 'function') {
      setUserProfile({
        ...userProfile,
        username: nameInput,
        email: emailInput,
        avatarLetter: nameInput.charAt(0).toUpperCase()
      });
      setIsEditing(false);
      alert('Profile details configuration updated!');
    }
  };

  const handleTopUpWallet = (e) => {
    e.preventDefault();
    const amount = parseFloat(topUpAmount);
    if (!isNaN(amount) && amount > 0) {
      if (typeof setWalletBalance === 'function') {
        setWalletBalance(prev => prev + amount);
        setTopUpAmount('');
        alert(`R ${amount.toFixed(2)} loaded successfully onto transit ledger!`);
      }
    }
  };

  return (
    <div className="user-dashboard">
      <div className="dashboard-main-grid">
        
        {/* DATA CONTROL PROFILE */}
        <div style={{ background: '#101621', border: '1px solid #202938', padding: '24px', borderRadius: '12px' }}>
          <h2>My Profile</h2>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Manage account logs parameters credentials records</p>

          {!isEditing ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}>
              <div>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>USERNAME</span>
                {/* ✅ ACCOUNT ACCOUNT INFO DISPATCH LOGGED IN PAYLOADS INTERPRETED */}
                <strong style={{ display: 'block', color: '#FFF', fontSize: '15px', marginTop: '2px' }}>{userProfile?.username}</strong>
              </div>
              <div>
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>EMAIL REGISTRY</span>
                <strong style={{ display: 'block', color: '#FFF', fontSize: '15px', marginTop: '2px' }}>{userProfile?.email}</strong>
              </div>
              <button onClick={() => setIsEditing(true)} style={{ background: 'transparent', border: '1px solid #c99b6b', padding: '10px', color: '#c99b6b', borderRadius: '6px', cursor: 'pointer', fontWeight: '700' }}>EDIT DETAILS</button>
            </div>
          ) : (
            <form onSubmit={handleUpdateProfile} style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
              <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} style={{ background: '#111823', border: '1px solid #202938', padding: '12px', borderRadius: '6px', color: '#FFF' }} required />
              <input type="email" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} style={{ background: '#111823', border: '1px solid #202938', padding: '12px', borderRadius: '6px', color: '#FFF' }} required />
              <button type="submit" style={{ background: '#c99b6b', padding: '12px', color: '#000', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>SAVE</button>
            </form>
          )}
        </div>

        {/* WALLET TERMINAL CONTROL BOX */}
        <div style={{ background: '#101621', border: '1px solid #202938', padding: '24px', borderRadius: '12px' }}>
          <h2>Transit Wallet</h2>
          <div style={{ background: 'linear-gradient(135deg, #111823 0%, #070A13 100%)', border: '1px solid #202938', padding: '20px', borderRadius: '10px', margin: '16px 0', position: 'relative' }}>
            <span style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)' }}>AVAILABLE PASS CREDIT</span>
            <h1 style={{ color: '#FFF', margin: '4px 0' }}>R {walletBalance.toFixed(2)}</h1>
            {/* ✅ USERNAME HOLDER SYNCED DYNAMICALLY HERE */}
            <span style={{ fontSize: '10px', color: '#c99b6b', fontWeight: '600' }}>HOLDER: {userProfile?.username?.toUpperCase()}</span>
          </div>

          <form onSubmit={handleTopUpWallet} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <input type="number" value={topUpAmount} onChange={(e) => setTopUpAmount(e.target.value)} placeholder="Top-up card amount..." style={{ background: '#111823', border: '1px solid #202938', padding: '12px', borderRadius: '6px', color: '#FFF' }} required />
            <button type="submit" style={{ background: '#c99b6b', padding: '12px', border: 'none', color: '#000', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}>LOAD FUNDS</button>
          </form>
        </div>

      </div>
    </div>
  );
}
