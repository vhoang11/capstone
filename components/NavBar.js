/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from 'react-bootstrap';
import SearchBar from './SearchBar';
import { useAuth } from '../utils/context/authContext';

export default function NavBar() {
  const { user } = useAuth();
  return (
    <nav className="navbar navbar-expand-md" id="navbar" style={{ backgroundColor: '#1d3557' }}>
      <div className="container-fluid">
        <Link passHref href="/">
          <img src="./logo2.png" alt="logo" style={{ width: '80px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarTogglerDemo01"
          style={{ paddingLeft: '10px', paddingRight: '10px', marginTop: '10px' }}
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/creators">
                <a
                  className="profile"
                  style={{
                    paddingLeft: '10px', paddingRight: '10px', marginTop: '30px', color: 'white',
                  }}
                >
                  Creators
                </a>
              </Link>
              <Link passHref href="/categories">
                <a className="categories" style={{ paddingLeft: '10px', paddingRight: '10px', color: 'white' }}>
                  Categories
                </a>
              </Link>
              <Link passHref href="/tutorials">
                <a className="tutorials" style={{ paddingLeft: '10px', paddingRight: '10px', color: 'white' }}>
                  Tutorials
                </a>
              </Link>
              <Link passHref href="/favorites">
                <a className="favorites" style={{ paddingLeft: '10px', paddingRight: '20px', color: 'white' }}>
                  Favorites
                </a>
              </Link>
            </li>
            <SearchBar />
            <Navbar.Brand className="navbar-brand" id="navbar-profile-image" style={{ marginLeft: '200px' }}>
              <Link passHref href="/profile">
                <Image src={user.photoURL} alt="userURL" width="40%" height="40%" />
              </Link>
            </Navbar.Brand>
          </ul>
        </div>
      </div>
    </nav>
  );
}
