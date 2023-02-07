import React from 'react';
import './Job.css';
import {FormatMoney} from 'format-money-js';


const Job = ({ info }) => {
    const {title, salary, equity, companyName} = info;
    const fm = new FormatMoney({
        decimals:2
    });
    let dollarAmt = fm.from(salary, {symbol: '$'});
    return (
        <div className="Job">
            <div className="info-container">
            <ul>
                <li className="job-title">{title}</li>
                <li className="job-companyname">{companyName}</li>
                <li>Salary: {salary !== null ? dollarAmt : `Undisclosed`}</li>
                {equity && <li>Equity: {`${Math.floor(equity*100)}%`} </li>}
            </ul> 
            </div>
            <div className="button-container">
                <button>APPLY</button>
            </div>
            
        </div>
    )
}

export default Job;
