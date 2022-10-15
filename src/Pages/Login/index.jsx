import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../Service/api'

import './style.css';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser() {

    }
    
    return (
        <div className='container-login'>
            <form className='form-login'>
                <input className='input-login' type='text' placeholder='Nome:' required />
                <input className='input-login' type='password' placeholder='Senha:' required />
            </form>

                <button className='buttons-login' onClick={loginUser}>Entrar</button>
                <Link to='/'><button className='buttons-login'>Cancelar</button></Link>
        </div>
    )
}

export default Login