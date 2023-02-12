import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useAuth} from './hooks/useAuth';
import {useUser} from './hooks/useUser';
import {Navigate} from 'react-router-dom';
import './CompanyDetail.css';
import Job from './Job';
import JoblyApi from './api';
import CompanyForm from './CompanyForm';

const CompanyDetail = ({edit}) => {
    const {currentToken} = useAuth();
    const {currentUser} = useUser();
    const [company, setCompany] = useState();

    const {handle} = useParams();
    useEffect(()=>{
        getCompanyByHandle();
    },[])
    if(!currentToken) {
        return <Navigate to="/login" replace />
    }


    const getCompanyByHandle = () => {
        const doApiCall = async()=>{
            let res = await JoblyApi.getCompany(handle);
            setCompany(res);
        }
        return doApiCall()
    } 


    if (!company) {
        return (
            <>
        <div className="CompanyDetail-container">

        </div>        
        <div className="CompanyDetail-jobs">
            
        </div>
        </>
        )
    }

    return (
        <>
        <div className="CompanyDetail-container">
                <h1>{company.name}</h1>
                <p>{company.description}</p>
                
        </div>
        {currentUser && currentUser.isAdmin && <div className="CompanyForm-container"><CompanyForm company={company} edit={edit}/></div>} 

        <div className="CompanyDetail-jobs">
                
                {company.jobs && company.jobs.map(j=> <Job info={j} />)}
        </div>
        </>
    )
}

export default CompanyDetail;