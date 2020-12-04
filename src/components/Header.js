import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img 
        className="header__logo"
          src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello Estelo</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Retuns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Ypur</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header;
