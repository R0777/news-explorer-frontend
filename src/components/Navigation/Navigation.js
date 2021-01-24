import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = (props) => {

    const display = {
      display: 'block',
    }
    const displayNon = {
      display: 'none',
    }

    return (
      <nav className="header__nav">
        <input id="header__btn-burger" type="checkbox" />
        <label onClick={props.handleCheck} className={props.location === '/saved-news'? 'header__btn-menu-blacked': 'header__btn-menu'} htmlFor="header__btn-burger">
        <span></span>
        </label>
          <ul className="header__nav-links">
            <li onClick={props.handleLocation}><Link to="/" className={props.location === '/saved-news'? 'header__nav-link header__nav-link_blacked': 'header__nav-link'}>Главная</Link></li>
            <li style={props.loggedIn ? display : displayNon } onClick={props.handleLocation}><Link to="/saved-news" className={props.location === '/saved-news'? 'header__nav-link header__nav-link_blacked': 'header__nav-link'}>Сохранённые статьи</Link></li>
            <li><button onClick={props.loggedIn ? props.signOut : props.onLoginPopup} className={props.location === '/saved-news'? 'header__nav-button header__nav-button-w': 'header__nav-button'}>{props.loggedIn ? `${props.userData.name}` : 'Авторизоваться'}</button></li>
          </ul>
      </nav>
    );
}

export default Navigation;