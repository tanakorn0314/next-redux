import { useState } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

const LoginForm = (props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const login = () => {
        const user = props.users.find(user => user.email === formData.email && user.password === formData.password);
        if (user) {
            alert('login success')
            props.dispatch({ type: 'LOGIN', payload: user });
            Router.push('/');
        } else {
            alert('not found user');
        }
    }

    return (
        <div className='login-form'>
            <table>
                <tbody>
                    <tr>
                        <td>Email:</td>
                        <td><input onChange={e => setFormData({ ...formData, email: e.target.value })} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type='password' onChange={e => setFormData({ ...formData, password: e.target.value })} /></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={login}>Login</button>
            <style jsx>{`
                .login-form {
                    border-radius: 4px;
                    box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
                    padding: 8px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

export default connect(state => state.User)(LoginForm);