// src/components/LoginModal.js
import React from 'react';
import '../styles/LoginModal.scss'; // Create this file for modal-specific styles

const LoginModal = ({ isOpen, onClose, onTraditionalLogin, onSocialLogin }) => {
  if (!isOpen) return null;
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login / Signup</h2>
        <input type="email" id="modalEmail" placeholder="Email" required />
        <input type="password" id="modalPassword" placeholder="Password" required />
        <button onClick={() => onTraditionalLogin(document.getElementById('modalEmail').value, document.getElementById('modalPassword').value)}>Submit</button>
        <p><a href="#">Forgot Password?</a></p>
        <hr style={{ margin: '1rem 0' }} />
        <button className="social-btn google" onClick={() => onSocialLogin('google')}>Login with Google</button>
        <button className="social-btn facebook" onClick={() => onSocialLogin('facebook')}>Login with Facebook</button>
        <button className="social-btn linkedin" onClick={() => onSocialLogin('linkedin')}>Login with LinkedIn</button>
      </div>
    </div>
  );
};

export default LoginModal;
