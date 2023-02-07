import React from 'react';
import './Company.css';

const Company = ({ info }) => {
    const {name, description} = info;
    return (
        <div className="Company">
            <ul>
                <li className="company-name">{name}</li>
                <li className="company-description">{description}</li>
                {/* {logoUrl && <li><img src={logoUrl} alt={`image-${name}`} /></li>} */}

            </ul>
        </div>
    )
}

export default Company;