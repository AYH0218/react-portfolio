import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>ポートフォリオ</h3>
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
            <a href="">その他</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header