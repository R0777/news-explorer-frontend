import React from 'react';
import Popup from '../Popup/Popup';

const LoginPopup = (props) => {

    return (
<Popup
        title={props.title}
        id={props.id}
        afterLink={props.afterLink}
        afterText={props.afterText}
        buttonText={props.buttonText}
        isOpen={props.isOpen}
        isClose={props.isClose}
        handleAfterLink={props.handleAfterLink}
        onRegister={props.onRegister}
        >
          <label className="popup__field">Email
              <input 
                type="email" 
                className="popup__input popup__input_email" 
                id='login-email' 
                name="email"
                placeholder="Введите свой email" 
                minLength="2" 
                maxLength="40" 
                required />
              <span className='popup__input-error' id='login-email-error'></span>
          </label>
          <label className="popup__field">Пароль
              <input 
                type="password" className="popup__input popup__input_pass" 
                id='login-pass' 
                name="password"
                placeholder="Введите пароль"
                minLength="2" 
                maxLength="40" 
                required />
              <span className='popup__input-error' id='login-pass-error'></span>
          </label>

</Popup>
    );
}

export default LoginPopup;