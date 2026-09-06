import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Eye } from 'lucide-react';
import '../Styling/SignIn.css';

const API_URL =
  import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function SignIn({ setIsAuthenticated }) {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

      const response = await fetch(`${API_URL}/api/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message ||
          'Invalid email or password.'
        );
      }

      // Save logged-in user
      localStorage.setItem(
        'shotLeftUser',
        JSON.stringify(data.user)
      );

      localStorage.setItem(
        'shotLeftAuthenticated',
        'true'
      );

      setIsAuthenticated(true);

      navigate('/dashboard');

    } catch (error) {

      console.error('Signin error:', error);

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

        <h2>Welcome back!</h2>

        <p className="hf-auth-subtitle">
          Glad to see you again.
        </p>

        {error && (
          <div className="auth-error">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

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
              required
            />

            <Eye
              size={16}
              className="hf-toggle-eye"
            />

          </div>

          <div className="hf-forgot-link">
            <Link to="#">
              Forget password?
            </Link>
          </div>

          <button
            type="submit"
            className="hf-submit-btn-tan"
            disabled={loading}
          >
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>

        </form>

        <p className="hf-auth-footer">
          Don't have an account?{' '}
          <Link to="/signup">
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}


