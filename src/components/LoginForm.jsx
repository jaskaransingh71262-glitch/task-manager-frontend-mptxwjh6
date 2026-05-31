import React from 'react';
const LoginForm = ({ email, password, onChangeEmail, onChangePassword, onLogin, loading, error }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onLogin();
    }}>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={onChangeEmail} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" value={password} onChange={onChangePassword} />
      </div>
      <button type="submit" className="btn primary-button" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
      {error && <p className="text-danger">{error}</p>}
    </form>
  );
};
export default LoginForm;