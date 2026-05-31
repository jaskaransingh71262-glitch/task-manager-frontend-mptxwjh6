import React from 'react';
const RegisterForm = ({ username, email, password, onChangeUsername, onChangeEmail, onChangePassword, onRegister, loading, error }) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onRegister();
    }}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">Username</label>
        <input type="text" className="form-control" id="username" value={username} onChange={onChangeUsername} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" value={email} onChange={onChangeEmail} />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" value={password} onChange={onChangePassword} />
      </div>
      <button type="submit" className="btn primary-button" disabled={loading}>{loading ? 'Registering...' : 'Register'}</button>
      {error && <p className="text-danger">{error}</p>}
    </form>
  );
};
export default RegisterForm;