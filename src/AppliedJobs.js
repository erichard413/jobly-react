import React, {useState, useEffect} from 'react';
import {useAuth} from './hooks/useAuth';
import {useUser} from './hooks/useUser';
import {Navigate} from 'react-router-dom';
import JoblyApi from './api';
import Application from './Application';


const AppliedJobs = ({user}) => {

    const {currentUser} = useUser();
    const [jobs, setJobs] = useState();
    const {currentToken} = useAuth();

    useEffect(()=>{
        getJobs();
    },[currentUser])

    const getJobs = ()=>{
        const fetchJobs = async()=>{
        const res = await JoblyApi.getAppliedCompanies(user.username);
        setJobs(res); 
        }
        fetchJobs();
    } 

    // implement pagination
    const paginationNum = 7
    const [pageOffset, setPageOffset] = useState(paginationNum);

    if(!currentToken) {
        return <Navigate to="/login" replace />
    }

    window.onscroll = () => {
        if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            if (pageOffset + paginationNum < jobs.length) {
                setPageOffset(pageOffset+paginationNum);
            } else {
                setPageOffset(jobs.length);
            }
        }
    }

    return (
        <div className="JobsList">
            {jobs ? jobs.slice(0, pageOffset).map(j => <Application key={j.job_id} info={j}/>): null}
        </div>
    )
}

export default AppliedJobs;