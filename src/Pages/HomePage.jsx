import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import '../Styling/HomePage.css';

export default function HomePage() {
  return (
    <div className="hf-home-wrapper">
      <div className="hf-home-content">
        <div className="hf-logo-container">
          <div className="hf-logo-icon">S</div>
          <div className="hf-logo-text">
            <h1>SHO'T LEFT</h1>
            <span>TRANSPORTS</span>
          </div>
        </div>
        <p className="hf-tagline">Your ride. Your city. Your way.</p>
        
        <p className="hf-description-text">
          Affordable rides to major transit hubs across South Africa.
        </p>

        <div className="hf-home-actions">
          <Link to="/signup" className="hf-btn-tan">
            CREATE ACCOUNT
          </Link>
          <Link to="/signin" className="hf-btn-outline">
            SIGN IN <ArrowRight size={16} />
          </Link>
        </div>

        <div className="hf-home-footer">
          <Heart size={14} className="heart-icon" />
          <span>Safe. Reliable. Local.</span>
        </div>
      </div>
    </div>
  );
}
