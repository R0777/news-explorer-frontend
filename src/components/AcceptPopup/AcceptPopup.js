import React from 'react';
import { Link } from 'react-router-dom'
import Popup from '../Popup/Popup'

const AcceptPopup = (props) => {
    return (
        <Popup
            title={props.title}
            id={props.id}
            isOpen={props.isOpen}
            isClose={props.isClose}>
            <p className="popup__orlogin"><Link to="#" className="popup__orlogin-link">Войти</Link></p>
        </Popup>
    );
}

export default AcceptPopup;