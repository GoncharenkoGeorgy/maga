import React from 'react';
import './Popup.css';

const Popup = (props) => {
  const { name, isOpen, children, onClose, onChange, onSubmit, buttonText } = props;
  
  React.useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    });
  }, [onClose, isOpen]);

  function handleClose(e) {
    if (e.target.classList.contains('popup')) {
      onClose();
    }
  }
  
  return (
    <section onClick={handleClose}
      className={`popup popup_${name} ${isOpen ? '' : 'popup_hidden'}`}>
      <form onSubmit={onSubmit} name={name} className={'popup__container popup__container_login'}>
        {children}
        <button onClick={onClose} className={'popup__close popup__close_login'} type='button' />
        {name !== 'tooltip' &&
          <>
            <button
              className='popup__button'
              onClick={onSubmit}>
              {buttonText}
            </button>
          </>
        }
        <span className='popup__subtitle'>{name !== 'tooltip' && 'или '}
          <span className='popup__link' onClick={onChange}>
            {name === 'login' ? 'Зарегистрироваться' : 'Войти'}</span></span>
      </form>
    </section >
  );
};

export default Popup;