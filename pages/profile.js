import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { useAuth } from '../utils/context/authContext';
import { signOut } from '../utils/auth';

export default function UserProfile() {
  const { user } = useAuth();

  return (
    <div style={{ marginTop: '80px' }}>
      <Image src={user.photoURL} alt="userURL" width="200px" height="200px" />
      <h2 style={{ marginTop: '35px' }}>Name: {user.displayName}</h2>
      <h4>Email: {user.email}</h4>
      <h5>Last Login: {user.metadata.lastSignInTime}</h5>
      <Button variant="danger" onClick={signOut} style={{ marginTop: '35px', backgroundColor: '#7192be', border: '#e9d985' }}> Sign Out</Button>
      <div>
        <Link passHref href="/creators/new">
          <Button
            type="submit"
            variant="info"
            style={{ backgroundColor: '#00b4d8', marginTop: '35px', color: 'white' }}
          >Create Profile
          </Button>
        </Link>
      </div>

    </div>
  );
}
