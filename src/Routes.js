import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import Home from './Home';
import CompanyList from './CompanyList';
import Company from './Company';
import JobsList from './JobsList';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';


// Look at the working demo to see the routes you’ll need:

// /
// Homepage — just a simple welcome message
// /companies
// List all companies
// /companies/apple
// View details of this company
// /jobs
// List all jobs
// /login
// Login/signup
// /signup
// Signup form
// /profile
// Edit profile page
// Make your routes file that allows you to navigate a skeleton of your site. Make simple placeholder components for each of the feature areas.

// Make a navigation component to be the top-of-window navigation bar, linking to these different sections.

// When you work on authentication later, you need to add more things here. But for now, you should be able to browse around the site and see your placeholder components.

const AppRoutes = ()=> {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/companies" element={<CompanyList />} />
            <Route exact path="/companies/:handle" element={<Company />} />
            <Route exact path="/jobs" element={<JobsList />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route path="*" element={<Navigate to="/" replace />}
            />
        </Routes>
    )
}

export default AppRoutes;