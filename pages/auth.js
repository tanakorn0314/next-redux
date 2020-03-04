import React, { useState } from 'react';
import LoginForm from '../src/components/LoginForm';
import RegisterForm from '../src/components/RegisterForm';

const AuthPage = props => {

    const [current, setCurrent] = useState('login');

    return (
        <div className='container'>
            <div>
                {
                    current === 'login' ? <LoginForm /> : <RegisterForm />
                }
                <div className='btn' onClick={() => setCurrent(current === 'login' ? 'register' : 'login')}>
                    {current === 'login' ? 'register' : 'login'}
                </div>
            </div>
            <style jsx>{`
                .container {
                    width: 100%;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                }
                .btn {
                    cursor: pointer;
                }
            `}</style>
        </div>
    )

}

export default AuthPage;