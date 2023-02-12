import React, {useEffect} from 'react';
import './Job.css';
import {FormatMoney} from 'format-money-js';
import JoblyApi from './api'
import {useUser} from './hooks/useUser';


const Job = ({ info }) => {

    const {currentUser, setCurrentUser} = useUser();

    const {id, title, salary, equity, companyName} = info;
 


    const fm = new FormatMoney({
        decimals:2
    });
    let dollarAmt = fm.from(salary, {symbol: '$'});

    const handleApply=(e)=>{
        e.preventDefault();
        const doApply = async() =>{
            await JoblyApi.apply(currentUser.username, id);
            let updatedUser = await JoblyApi.getUser(currentUser.username);
            setCurrentUser(updatedUser.user)
        }
        doApply();
    }
    const handleUnApply=(e)=>{
        e.preventDefault();
        const doUnApply = async() =>{
            await JoblyApi.unApply(currentUser.username, id);
            let updatedUser = await JoblyApi.getUser(currentUser.username);
            setCurrentUser(updatedUser.user)
        }
        doUnApply();
    }

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
                {currentUser && currentUser.applications.includes(id) ? <button onClick={handleUnApply}>APPLIED</button> : <button onClick={handleApply} type="submit">APPLY</button>}
            </div>
            
        </div>
    )
}

export default Job;
