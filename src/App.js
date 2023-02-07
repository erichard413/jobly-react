import './App.css';
import React, {useState} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
// import AppRoutes from './Routes';
import NavBar from './NavBar';
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';

import { mockJobs } from './mocks';
import { mockCompanies } from './mocks';
import { mockUsers } from './mocks';

const jobs = mockJobs;
const companies = mockCompanies;
const user = mockUsers.user;

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/companies" element={<CompanyList companies={companies} />} />
            <Route exact path="/companies/:handle" element={<CompanyDetail companies={companies}/>} />
            <Route exact path="/jobs" element={<JobsList jobs={jobs} />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/profile" element={<Profile user={user} />} />
            <Route path="*" element={<Navigate to="/" replace />}
            />
        </Routes>
    </div>
  );
}

export default App;
