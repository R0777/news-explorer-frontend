import React from 'react';
import { Link } from 'react-router-dom'
const Popup = (props) => {

  const display = {
    display: 'block',
  }

  const displayNon = {
    display: 'none',
  }

    return (
        <section className={`popup ${props.isOpen && 'active'}`} id={props.id}>
            <form className="popup__block" noValidate onSubmit={props.onSubmit}>
                <button className="popup__close" type="button" onClick={props.isClose}></button>
                <h4 className="popup__title">{props.title}</h4>
                {props.children&&props.children}
                <button onClick={props.onRegister&&props.onRegister} style={props.id === 'accept' ? displayNon : display} className="popup__save">{props.buttonText}</button>
                <p className="popup__orlogin" onClick={props.handleAfterLink}>{props.afterText&&props.afterText} <Link to="/" className="popup__orlogin-link">{props.afterLink}</Link></p>
            </form>
        </section>
    );
}

export default Popup;