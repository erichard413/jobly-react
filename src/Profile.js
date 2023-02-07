import React from 'react';
import ProfileForm from './ProfileForm';
import './Profile.css'

const Profile = ({user}) => {
    return (
        <div className="Profile">
            <div className="Profile-container">
                <h1>{user.username}</h1>
                <ProfileForm user={user}/>
            </div>
        </div>
    )
}

export default Profile;