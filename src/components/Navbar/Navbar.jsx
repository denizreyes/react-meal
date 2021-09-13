import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <header>
      <div className="navbar container">
        <div className="navbar_title">
          <Link to="/"><h1>Meals <span>App</span></h1></Link>
        </div>
        <div className="navbar_links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/random">Random</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
