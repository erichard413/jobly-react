import React from 'react';
import ProfileForm from './ProfileForm';
import './Profile.css';
import {Navigate} from 'react-router-dom';
import {useUser} from './hooks/useUser';
import {useAuth} from './hooks/useAuth';
import JoblyApi from './api';
import jwt_decode from 'jwt-decode';

const Profile = () => {
    const {currentUser, setCurrentUser} = useUser();
    const {currentToken, setCurrentToken} = useAuth();
    
    if(!currentToken) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="Profile">
            <div className="Profile-container">
                {currentUser && <h1>{currentUser.username}</h1>}
                {currentUser && <ProfileForm user={currentUser}/>}
                
            </div>
        </div>
    )
}

export default Profile;