import React from 'react';
import {useParams} from 'react-router-dom';
import './CompanyDetail.css';
import Job from './Job';

const CompanyDetail = ({companies}) => {
    const {handle} = useParams();
    const company = companies.filter(c=> c.handle === handle);
    
    return (
        <>
        <div className="CompanyDetail-container">
                <h1>{company[0].name}</h1>
                <p>{company[0].description}</p>
        </div>        
        <div className="CompanyDetail-jobs">
                {company[0].jobs && company[0].jobs.map(j=> <Job info={j} />)}
            
        </div>
        </>
    )
}

export default CompanyDetail;