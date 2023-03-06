/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { signOut } from '../utils/auth';
import SearchBar from './SearchBar';

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-md" id="navbar" style={{ backgroundColor: '#b7c3f3' }}>
      <div className="container-fluid">
        <Link passHref href="/">
          <img src="/components/logo.jpg" alt="logo" style={{ padding: '10px', width: '100px' }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link passHref href="/profile">
                <a className="profile" style={{ padding: '10px', color: 'white' }}>
                  Profile
                </a>
              </Link>
              <Link passHref href="/categories">
                <a className="categories" style={{ padding: '10px', color: 'white' }}>
                  Categories
                </a>
              </Link>
              <Link passHref href="/tutorials">
                <a className="/tutorials" style={{ padding: '10px', color: 'white' }}>
                  Tutorials
                </a>
              </Link>
              <Link passHref href="/favorites">
                <a className="/favorites" style={{ padding: '10px', paddingRight: '40px', color: 'white' }}>
                  Favorites
                </a>
              </Link>
            </li>
            <SearchBar />
            <button type="button" className="btn btn-danger" onClick={signOut} style={{ marginLeft: '150px', backgroundColor: '#7192be' }}>
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}
