import React from 'react';
import Popup from '../Popup/Popup';

const Login = (props) => {

    const { isOpen, onClose, onChange, onLogin } = props;

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('')

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // здесь обрабатываем вход в систему
        if (!email || !password) {
            console.log('error');
            return;
        }
        onLogin(email, password);
        setEmail('');
        setPassword('');
    }

    return (
        <Popup
            name='login'
            isOpen={isOpen}
            onChange={onChange}
            buttonText='Войти'
            onClose={onClose}
            onSubmit={handleSubmit}
            >
            <h2 className={'popup__title'}>Вход</h2>
            <span className='input__type'>Email</span>
            <label htmlFor='email' className='login__fields'>
                <input
                    type='text'
                    className='login__input'
                    id='log-email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleChangeEmail}
                    required
                />
                <span className='popup__input-error' id='popup-input-error'></span>
            </label>
            <label htmlFor='password' className='login__fields'>
                <input
                    type='password'
                    className='login__input'
                    id='log-pas'
                    name='password'
                    placeholder='Пароль'
                    value={password}
                    onChange={handleChangePassword}
                    required
                />
                <span className='popup__input-error' id='popup-input-error'></span>
            </label>
        </Popup>
    );
};

export default Login;