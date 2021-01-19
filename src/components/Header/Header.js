import React from 'react';
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import './Header.css'

const Header = (props) => {

    return (
<header className={props.location === '/'? 'header': 'header header__white'}>
    <p className="header__logo" onClick={props.handleLocation}><Link to="/" className="header__link">NewsExplorer</Link></p>
    <Navigation {...props} />
  </header>
    );
}

export default Header;