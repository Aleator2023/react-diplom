import React from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../img/header-logo.png';
import headerControlsSprite from '../img/header-controls-sprite.png';
import bannerImage from '../img/banner.jpg';
import '../css/header.css'; 

function Header() {
  return (
    <header className="header-container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          <img src={headerLogo} alt="Bosa Noga" />
        </Link>
        
        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Главная</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalog">Каталог</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">О магазине</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">Контакты</Link>
            </li>
          </ul>
        </div>
        <div className="header-controls-pics">
          <div className="header-controls-pic header-controls-search" style={{backgroundImage: `url(${headerControlsSprite})`}}></div>
          <div className="header-controls-pic header-controls-cart" style={{backgroundImage: `url(${headerControlsSprite})`}}></div>
        </div>
      </nav>
      <div className="banner">
          <img src={bannerImage} className="img-fluid" alt="К весне готовы!" />
          <h2 className="banner-header">К весне готовы!</h2>
        </div>
    </header>
  );
}

export default Header;
