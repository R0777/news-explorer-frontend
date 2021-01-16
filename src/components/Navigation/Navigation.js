import React from 'react';
import './Navigation.css'

const Navigation = () => {
    return (
      <nav className="header__nav">
        <input id="header__btn-burger" type="checkbox" />
        <label className="header__btn-menu" htmlFor="header__btn-burger">
        <span></span>
        </label>
          <ul className="header__nav-links">
            <li><a href="#" className="header__nav-link">Главная</a></li>
            <li><a href="#" className="header__nav-link">Сохранённые статьи</a></li>
            <li><button className="header__nav-button">Грета</button></li>
          </ul>
      </nav>
    );
}

export default Navigation;