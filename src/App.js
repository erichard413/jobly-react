import './App.css';
import React, {useState, useEffect} from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import jwt_decode from 'jwt-decode'
import {useAuth} from './hooks/useAuth';
import {useUser} from './hooks/useUser';

import NavBar from './NavBar';
import Home from './Home';
import CompanyList from './CompanyList';
import CompanyDetail from './CompanyDetail';
import JobsList from './JobsList';
import Login from './Login';
import Signup from './Signup';
import Profile from './Profile';
import AppliedJobs from './AppliedJobs';

//import api
import JoblyApi from './api.js';

function App() {
  const [jobs, setJobs] = useState([]);
  const [companies, setCompanies] = useState([]);
  const {currentUser, setCurrentUser} = useUser();
  const {currentToken, setCurrentToken} = useAuth();
// get jobs and companies on page load
  useEffect(()=>{
    async function getData() {
      let jobsData = await JoblyApi.getJobs();
      let companiesData = await JoblyApi.getCompanies();

        let data = jwt_decode(currentToken);
        let userData = await JoblyApi.getUser(data.username);
        setCurrentUser(userData.user);
      
      setJobs(jobsData);
      setCompanies(companiesData);

    }
    getData();
  },[])

// get user on any change to token
  useEffect(()=> {
    async function getUserData() {
      if (currentToken) {
        let data = jwt_decode(currentToken);
        let userData = await JoblyApi.getUser(data.username);
        setCurrentUser(userData.user);
      }
    }
    async function getAppData() {
      let jobsData = await JoblyApi.getJobs();
      let companiesData = await JoblyApi.getCompanies();
      setJobs(jobsData);
      setCompanies(companiesData);
    }
    
    getAppData();
    getUserData();
  }, [currentToken])



const companySearch = async(term) => {
  let companies = await JoblyApi.searchCompanies(term);
  setCompanies(companies);
}
const resetCompanies = async() => {
  let companies = await JoblyApi.getCompanies();  
  setCompanies(companies);
}

const logInUser = async(username, password) => {
  try {
    const res = await JoblyApi.logIn(username, password);
    setCurrentToken(res.token);
    localStorage.setItem('token', res.token);
    JoblyApi.token = res.token;
    return true
  } catch (err) {
    return false
  }
}

const editCompanyInfo = async(handle, data) => {
  let company = await JoblyApi.editCompany(handle, data);
  return company;
}

const logOutUser = () => {
  setCurrentUser();
  localStorage.removeItem('token')
  JoblyApi.token = null;
}


  return (
      <div className="App">
        <NavBar user={currentUser} logout={logOutUser} />
        <Routes>
            <Route exact path="/home" element={<Home user={currentUser} />} />
            <Route exact path="/companies" element={<CompanyList companies={companies} reset={resetCompanies} search={companySearch} />} />
            <Route exact path="/companies/:handle" element={<CompanyDetail edit={editCompanyInfo}/>} />
            <Route exact path="/jobs" element={<JobsList jobs={jobs} />} />
            <Route exact path="/login" element={<Login login={logInUser}/>} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/profile" element={<Profile user={currentUser} />} />
            <Route exact path="/applied" element={<AppliedJobs user={currentUser} />}/>
            <Route path="*" element={<Navigate to="/home" replace />}/>
            <Route path="/" element={<Navigate to="/home" replace/>}/>
        </Routes>
    </div>

    
  );
}

export default App;
