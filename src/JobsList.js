import React, {useState} from 'react';
import Job from './Job';
import {useAuth} from './hooks/useAuth';
import {Navigate} from 'react-router-dom';


const JobsList = ({jobs}) => {
    const {currentToken} = useAuth();
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
            {jobs.slice(0, pageOffset).map(j => <Job key={j.id} info={j}/>)}
        </div>
    )
}

export default JobsList;