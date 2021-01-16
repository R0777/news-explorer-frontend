import React from 'react';
import Navigation from '../Navigation/Navigation'
import './Header.css'

const Header = () => {
    return (
<header className="header">
    <p className="header__logo">NewsExplorer</p>
    <Navigation />
  </header>
    );
}

export default Header;