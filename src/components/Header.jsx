import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>Portfolio</h3>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/works">作品</Link>
          </li>
          <li>
            <Link to="/etc">その他</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
