import React from 'react';
import UseForm from '../UseForm/UseForm'
import Popup from '../Popup/Popup';

const RegistrPopup = ({ handlRegister, ...props }) => {

const {values, errors, handleChange} = UseForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, name } = values;
    handlRegister(email, password, name);
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
                id='registr-email' 
                name="email"
                placeholder="Введите свой email"  
                minLength={2} 
                maxLength={40}
                onChange={handleChange} 
                value={values.email || ''}
                required />
              <span className='popup__input-error active' id='registr-email-error'>{(errors && props.isOpen) && errors.email}</span>
          </label>
          <label className="popup__field">Пароль
              <input 
                type="password" className="popup__input popup__input_pass" 
                id='registr-pass' 
                name="password"
                placeholder="Введите пароль" 
                minLength={2} 
                maxLength={40}
                onChange={handleChange} 
                value={values.password || ''}
                required />
              <span className='popup__input-error active' id='registr-pass-error'>{(errors && props.isOpen) && errors.password}</span>
          </label>
          <label className="popup__field">Имя
              <input 
                type="text" 
                className="popup__input popup__input_name" 
                id='registr-name' 
                name="name"
                placeholder="Введите своё имя" 
                minLength={2} 
                maxLength={200} 
                onChange={handleChange}
                value={values.name || ''}
                required />
              <span className='popup__input-error active' id='registr-name-error'>{(errors && props.isOpen) && errors.name}</span>
            </label>
            <button type="submit" className="popup__save">{props.buttonText}</button>

        </Popup>
    );
}

export default RegistrPopup;