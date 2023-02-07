import React from 'react';
import Company from './Company';
import {Link} from 'react-router-dom';
import './CompanyList.css';

const CompanyList = ({companies}) => {
    return (
        <div className="CompanyList">
            {companies.map(c => <Link to={`/companies/${c.handle}`}><Company info={c} /></Link> )}
        </div>
    )
}

export default CompanyList;