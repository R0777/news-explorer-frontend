import React from 'react';
import { Link} from 'react-router-dom'
const Popup = (props) => {

    return (
        <section className={`popup ${props.isOpen && 'active'}`} id={props.id}>
            <form className="popup__block" noValidate onSubmit={props.handleSubmit}>
                <button className="popup__close" type="button" onClick={props.isClose}></button>
                <h4 className="popup__title">{props.title}</h4>
                {props.children&&props.children}
                <p className="popup__orlogin">{props.afterText&&props.afterText} <Link onClick={props.isloggedIn ? props.isClose : props.handleAfterLink} to="/" className="popup__orlogin-link">{props.afterLink}</Link></p>
            </form>
        </section>
    );
}

export default Popup;