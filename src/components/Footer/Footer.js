import React from 'react';
import smm from '../../images/svg/social-1.svg';
import facebook from '../../images/svg/social-2.svg';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
        <p className="footer__copy">&copy; 2021 Supersite, Powered by News API</p>
        <ul className="footer__links">
          <li className="footer__link">Главная</li>
          <li className="footer__link">Яндекс.Практикум</li>
        </ul>
        <ul className="footer__links-social">
          <li className="footer__link-social"><img src={smm} alt="smm" /></li>
          <li className="footer__link-social"><img src={facebook} alt="facebook" /></li>
        </ul>
      </footer>
    );
}

export default Footer;