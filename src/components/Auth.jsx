import { useState } from 'react';
import { register, login } from '../utils/auth';

function Auth({ onLogin }) {
  const [mode, setMode] = useState('login');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const authFunction = mode === 'register' ? register : login;
    const result = authFunction(username, password);

    setLoading(false);

    if (result.success) {
      onLogin(result.username, result.userData);
    } else {
      setError(result.error);
    }
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    setError('');
    setUsername('');
    setPassword('');
    setEmail('');
  };

  return (
    <div className="auth-container">
      <div className="auth-card glass-card">
        <h1 className="logo" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          LinguaQuest
        </h1>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => switchMode('login')}
          >
            Login
          </button>
          <button
            className={`auth-tab ${mode === 'register' ? 'active' : ''}`}
            onClick={() => switchMode('register')}
          >
            Register
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              className="auth-input"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              autoFocus
              disabled={loading}
            />
          </div>

          {mode === 'register' && (
            <div>
              <input
                type="email"
                className="auth-input"
                placeholder="Email (optional)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
          )}

          <div>
            <input
              type="password"
              className="auth-input"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          {error && <div className="auth-error">{error}</div>}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={loading}
            style={{ marginTop: '1rem' }}
          >
            {loading ? 'Please wait...' : mode === 'login' ? 'Login' : 'Create Account'}
          </button>
        </form>

        {mode === 'register' && (
          <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '0.5rem' }}>Create your account to start learning and save your progress!</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--korean-accent)' }}>
              💾 Your progress is automatically saved in your browser and will be there when you return!
            </p>
          </div>
        )}

        {mode === 'login' && (
          <div style={{ marginTop: '1.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', textAlign: 'center' }}>
            <p style={{ marginBottom: '0.5rem' }}>Welcome back! Login to continue your language journey.</p>
            <p style={{ fontSize: '0.8rem', color: 'var(--spanish-accent)' }}>
              📚 Your progress, XP, and achievements are waiting for you!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Auth;
