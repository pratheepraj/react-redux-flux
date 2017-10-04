// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () =>
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="menu">
        <li>
          <Link to="/">Simple Diary</Link>
        </li>
      </ul>
    </div>
    <div className="top-bar-left">
      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </div>
  </div>;

export default TopBar;
