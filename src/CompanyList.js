import React, {useState} from 'react';
import Company from './Company';
import {Link} from 'react-router-dom';
import {useAuth} from './hooks/useAuth';
import {Navigate} from 'react-router-dom';
import _ from 'lodash';
import './CompanyList.css';

import {
    Button,
    Form,
    FormGroup,
    Input
  } from 'reactstrap';

const CompanyList = ({companies, search, reset}) => {
    const initialState = {
        searchTerm: ""
    }
    const [formData, setFormData] = useState(initialState)
    const {currentToken} = useAuth();

    // implement pagination
    const paginationNum = 7
    const [pageOffset, setPageOffset] = useState(paginationNum);

    window.onscroll = () => {
        if(window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
            if (pageOffset + paginationNum < companies.length) {
                setPageOffset(pageOffset+paginationNum);
            } else {
                setPageOffset(companies.length);
            }
        }
    }


    if(!currentToken) {
        return <Navigate to="/login" replace />
    }
    //lodash debouncer implemented here -> to do search on change to the form, with a 700ms delay.
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
        
        const doSearch = _.debounce(()=>{
            search(formData.searchTerm);
        }, 700);

        if (e.target.value.length > 1) {
           doSearch(); 
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        search(formData.searchTerm)
    }
    const handleReset = (e) => {
        e.preventDefault()
        reset();
        setFormData(initialState);
    }

    return (
        <div className="CompanyList">
            <div className="CompanyList-search">
                <Form className="form">
                    <FormGroup>
                    <Input 
                        name="searchTerm"
                        type="text"
                        placeholder="Search for company..."
                        value={formData.searchTerm}
                        onChange={handleChange}
                        />
                    </FormGroup>
                    <Button type="submit" onClick={handleSubmit}>Search</Button>
                    <Button type="submit" onClick={handleReset}>Reset</Button>
                </Form>
            
            </div>
            {companies.slice(0, pageOffset).map(c => <Link key={`${c.handle}-link`} to={`/companies/${c.handle}`}><Company key={c.handle} info={c} /></Link> )}
        </div>
    )
}

export default CompanyList;