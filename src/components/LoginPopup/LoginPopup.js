import React, { useState } from 'react';
import Popup from '../Popup/Popup';

const LoginPopup = ({ handlAuthorize, ...props }) => {

  const [data, setData] = useState({
    email: '',
    password: ''
    });

    const handleChange = (e) => {
    const {name, value} = e.target;
    setData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
}
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handlAuthorize(data)
    }

    return (
<Popup
        title={props.title}
        id={props.id}
        afterLink={props.afterLink}
        afterText={props.afterText}
        isOpen={props.isOpen}
        isClose={props.isClose}
        handleAfterLink={props.handleAfterLink}
        handleSubmit={handleSubmit}
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
                onChange={handleChange}
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
                onChange={handleChange}
                required />
              <span className='popup__input-error' id='login-pass-error'></span>
          </label>
          <button type="submit" className="popup__save">{props.buttonText}</button>
</Popup>
    );
}

export default LoginPopup;