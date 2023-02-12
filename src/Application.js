import React from 'react';
import './Job.css';

const Application = ({info}) => {

    const {title, name} = info;
 
    return (
        <div className="Job">
            <div className="info-container">
            <ul>
                <li className="job-title">{title}</li>
                <li className="job-companyname">{name}</li>
            </ul> 
            </div>
        </div>
    )
}

export default Application;