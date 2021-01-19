import React from 'react';
import { Link } from 'react-router-dom'
import smm from '../../images/svg/social-1.svg';
import facebook from '../../images/svg/social-2.svg';
import './Footer.css'

const Footer = (props) => {
    return (
        <footer className="footer">
        <p className="footer__copy">&copy; 2021 Supersite, Powered by News API</p>
        <ul className="footer__links">
          <li onClick={props.handleLocation}><Link className="footer__link" to="/">Главная</Link></li>
          <li><Link className="footer__link" to={{ pathname:"https://praktikum.yandex.ru" }} target="_blank">Яндекс.Практикум</Link></li>
        </ul>
        <ul className="footer__links-social">
          <li><Link target="_blank" className="footer__link-social" to={{ pathname:"https://www.tiktok.com/" }}><img src={smm} alt="smm" /></Link></li>
          <li><Link target="_blank" className="footer__link-social" to={{ pathname:"https://www.facebook.com" }}><img src={facebook} alt="facebook" /></Link></li>
        </ul>
      </footer>
    );
}

export default Footer;