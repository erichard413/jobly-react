import React from 'react';
import LoginForm from './LoginForm';
import './Login.css';

const Login = () => {
    return (
        <div className="Login">
            <div className="Login-container">
                <h1>Log In</h1>
                <p>Start searching millions of jobs now!</p>
            <LoginForm />
            </div>
        </div>
    )
}

export default Login;