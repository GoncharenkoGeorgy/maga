
import React from 'react';
import Popup from '../Popup/Popup';

const Register = (props) => {

    const { isOpen, onClose, onChange, onRegister } = props;

    const [name, setName] = React.useState('');
    const [secondName, setSeconName] = React.useState('');
    const [password, setPassword] = React.useState('')
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeSecondName = (e) => {
        setSeconName(e.target.value);
    }

    const handleChangePhone = (e) => {
        setPhone(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        onRegister(name, secondName, password, email, phone);
        setEmail('');
        setPassword('');
    }

    return (
        <Popup
            name='register'
            isOpen={isOpen}
            onChange={onChange}
            onSubmit={handleSubmit}
            buttonText='Зарегистрироваться'
            onClose={onClose}
            >
            <h2 className={'popup__title'}>Регистрация</h2>
            <label className='register__fields'>
                <input
                    type='text'
                    className='register__input'
                    id='reg-name'
                    name='name'
                    placeholder='Name'
                    value={name}
                    onChange={handleChangeName}
                    required
                />
                <span className='popup__input-error' id='popup-input-error'></span>
            </label>
            <label className='register__fields'>
                <input
                    type='text'
                    className='register__input'
                    id='reg-secondName'
                    name='secondName'
                    placeholder='SecondName'
                    value={secondName}
                    onChange={handleChangeSecondName}
                    required
                />
                <span className='popup__input-error' id='popup-input-error'></span>
            </label>
            <label htmlFor='password' className='register__fields'>
                <input
                    type='password'
                    className='register__input'
                    id='reg-pas'
                    name='password'
                    placeholder='Password'
                    value={password}
                    onChange={handleChangePassword}
                    required
                />
                <span className='popup__input-error' id='popup-input-error'></span>
            </label>
            <label htmlFor='email' className='register__fields'>
                <input
                    type='text'
                    className='register__input'
                    id='reg-email'
                    name='email'
                    placeholder='Email'
                    value={email}
                    onChange={handleChangeEmail}
                    required
                />
                <span className='popup__input-error' id='popup-input-error'></span>
            </label>
            <label htmlFor='email' className='register__fields'>
                <input
                    type='text'
                    className='register__input'
                    id='reg-phone'
                    name='phone'
                    placeholder='Phone'
                    value={phone}
                    onChange={handleChangePhone}
                    required
                />
                <span className='popup__input-error' id='popup-input-error'></span>
            </label>
        </Popup>
    );
};

export default Register;