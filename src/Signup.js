import React from 'react';
import SignUpForm from './SignUpForm';
import './Signup.css';

const Signup = () => {
    return (
        <div className="Signup">
            <div className="Signup-container">
                <h1>Sign Up</h1>
                <SignUpForm />
            </div>
        </div>
    )
}

export default Signup;