import React from 'react';
import Job from './Job';

const JobsList = ({jobs}) => {
    return (
        <div className="JobsList">
            {jobs.map(j => <Job info={j}/>)}
        </div>
    )
}

export default JobsList;