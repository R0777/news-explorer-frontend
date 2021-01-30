import React, { useState, useCallback } from 'react';
import UseForm from '../UseForm/UseForm'
import Popup from '../Popup/Popup';

const LoginPopup = ({ handlAuthorize, ...props }) => {

  const {values, errors, handleChange, resetForm, isValid} = UseForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    handlAuthorize( values );
    resetForm()
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
                value={values.email || ''}
                placeholder="Введите свой email" 
                minLength={2} 
                maxLength={40}
                onChange={handleChange}
                required />
              <span className="popup__input-error active" id='login-email-error'>{(errors && props.isOpen) && errors.email}</span>
          </label>
          <label className="popup__field">Пароль
              <input 
                type="password" className="popup__input popup__input_pass" 
                id='login-pass' 
                name="password"
                value={values.password || ''}
                placeholder="Введите пароль"
                minLength={2} 
                maxLength={40}
                onChange={handleChange}
                required />
              <span className="popup__input-error active" id='login-pass-error'>{(errors && props.isOpen) && errors.password}</span>
          </label>
          <button type="submit" className={isValid ? 'popup__save' :'popup__save inactive'}>{props.buttonText}</button>
</Popup>
    );
}

export default LoginPopup;