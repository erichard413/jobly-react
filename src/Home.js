import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from 'reactstrap';
import './Home.css';

const Home = ({user}) => {
    const navigate = useNavigate();
    return (
        <div className="Home">
            <div className="Home-container">
                {user && <>
                <h1>Jobly</h1>
                <p>Welcome back, {user.firstName}</p>
                </>}

                {!user && <>
                <h1>Jobly</h1>
                <p>Your new job starts here.</p>
                <div className="Home-button-div">
                    <Button onClick={() => navigate("/login", {replace: true})}>Login</Button>
                    <Button onClick={() => navigate("/signup", {replace: true})}>Sign Up</Button>
                </div>
                </>}
                
            </div>
        </div>
    )
}

export default Home;