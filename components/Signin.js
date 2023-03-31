import React from 'react';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center signin"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '800px',
        margin: '0 auto',
      }}
    >
      <h1>Ready to rock n repair?</h1>
      <p>Click the button below to login!</p>
      <button type="button" className="btn copy-btn" style={{ backgroundColor: '#7192be', color: 'white' }} onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}

export default Signin;
