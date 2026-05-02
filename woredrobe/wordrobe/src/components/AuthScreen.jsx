import React, { useState, useEffect } from 'react';

const AuthScreen = ({ onAuthSuccess }) => {
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const CLIENT_ID = "499241304065-ekloo2k06bci87jnantctdrkfkq37pkf.apps.googleusercontent.com";

  useEffect(() => {
    const initializeGoogle = () => {
      if (window.google) {
        window.google.accounts.id.initialize({
          client_id: CLIENT_ID,
          callback: (response) => {
            const payload = JSON.parse(atob(response.credential.split('.')[1]));
            onAuthSuccess(payload.email, payload.name);
          },
          prompt: "select_account"
        });
        window.google.accounts.id.renderButton(
          document.getElementById("google-btn-container"),
          { theme: "outline", size: "large", width: "320" }
        );
      }
    };

    if (window.google) {
      initializeGoogle();
    } else {
      const interval = setInterval(() => {
        if (window.google) {
          initializeGoogle();
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [onAuthSuccess]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      onAuthSuccess(email, email.split('@')[0]);
    }
  };

  return (
    <div id="auth-screen">
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">✦ Wardrobe</div>
          <p className="auth-tagline">Your AI-powered personal stylist</p>
        </div>

        <div id="google-btn-container" className="google-btn-container"></div>

        <div className="divider">or use email</div>

        <div className="auth-mode-toggle">
          <button
            className={`mode-btn ${mode === 'login' ? 'active' : ''}`}
            onClick={() => setMode('login')}
          >
            Sign In
          </button>
          <button
            className={`mode-btn ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => setMode('signup')}
          >
            Create Account
          </button>
        </div>

        <form className="email-auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input-modern"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="auth-input-modern"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn-primary-modern">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthScreen;  