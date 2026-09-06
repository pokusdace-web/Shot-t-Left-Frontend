import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, Eye } from 'lucide-react';
import '../Styling/SignUp.css';

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function SignUp() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    try {

      const response = await fetch(`${API_URL}/api/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || 'Unable to create account.'
        );
      }

      alert('Account created successfully!');

      navigate('/signin');

    } catch (error) {

      console.error('Signup error:', error);

      setError(
        error.message ||
        'Could not connect to the server.'
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="hf-auth-wrapper">

      <div className="hf-auth-card">

        <Link to="/" className="hf-back-arrow">
          ←
        </Link>

        <h2>Create Account</h2>

        <p className="hf-auth-subtitle">
          Join Sho't Left Transports
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <div className="hf-input-container">

            <User
              size={16}
              className="hf-field-icon"
            />

            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  username: e.target.value
                })
              }
              required
            />

          </div>

          <div className="hf-input-container">

            <Mail
              size={16}
              className="hf-field-icon"
            />

            <input
              type="email"
              placeholder="Email address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
              }
              required
            />

          </div>

          <div className="hf-input-container">

            <Lock
              size={16}
              className="hf-field-icon"
            />

            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value
                })
              }
              minLength={6}
              required
            />

            <Eye
              size={16}
              className="hf-toggle-eye"
            />

          </div>

          <div className="hf-encryption-note">
            🛡️ Your password is secured with bcrypt encryption.
          </div>

          <button
            type="submit"
            className="hf-submit-btn-tan"
            disabled={loading}
          >
            {loading ? 'CREATING ACCOUNT...' : 'CREATE ACCOUNT'}
          </button>

        </form>

        <p className="hf-auth-footer">
          Already have an account?{' '}
          <Link to="/signin">
            Sign In
          </Link>
        </p>

      </div>

    </div>
  );
}