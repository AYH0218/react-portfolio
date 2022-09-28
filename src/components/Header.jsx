import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>
          <Link to="/">Portfolio</Link>
        </h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/works">WORKS</Link>
          </li>
          <li>
            <Link to="/other">OTHER</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
