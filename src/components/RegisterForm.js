import { connect } from 'react-redux';
import { useState } from 'react';

const RegisterForm = (props) => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        firstname: '',
        lastname: ''
    });

    const addUser = () => {
        props.dispatch({type: 'ADD_USER', payload: formData});
    }

    console.log(props)
    
    return (
        <div className='register-form'>
            <table>
                <tbody>
                    <tr>
                        <td>Email:</td>
                        <td><input onChange={e => setFormData({...formData, email: e.target.value})}/></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type='password' onChange={e => setFormData({...formData, password: e.target.value})}/></td>
                    </tr>
                    <tr>
                        <td>Confirm Password:</td>
                        <td><input type='password' onChange={e => setFormData({...formData, confirmPassword: e.target.value})}/></td>
                    </tr>
                    <tr>
                        <td>Firstname</td>
                        <td><input onChange={e => setFormData({...formData, firstname: e.target.value})} /></td>
                    </tr>
                    <tr>
                        <td>Lastname</td>
                        <td><input onChange={e => setFormData({...formData, lastname: e.target.value})}/></td>
                    </tr>
                </tbody>
            </table>
            <button onClick={addUser}>Register</button>
            <style jsx>{`
                .register-form {
                    border-radius: 4px;
                    box-shadow: 0 0 6px 0 rgba(0,0,0,.15);
                    padding: 8px;
                    text-align: center;
                }
            `}</style>
        </div>
    )
}

export default connect((state) => state.User)(RegisterForm);