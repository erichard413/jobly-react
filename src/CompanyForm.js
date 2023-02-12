import React, {useState} from 'react';
import './CompanyForm.css';



import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

const CompanyForm = ({edit, company}) => {
    const initialFlash = ""
    const [flashMsg, setFlashMsg] = useState(initialFlash);
    const [currCompany, setCurrCompany] = useState(company);


    const initialState = {
        name: currCompany.name,
        description: currCompany.description,
        numEmployees: +currCompany.numEmployees
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        let {name, value} = e.target;
        if (name === 'numEmployees') {
            value = +value;
        }
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      const doEditCompany = async()=>{
        let res = await edit(currCompany.handle, formData)
        setCurrCompany(res)
      }
      doEditCompany();
      
    }
      
    return (
        <div className="CompanyForm">
        <h1>Edit Company Info</h1>
        {flashMsg && <p className="CompanyForm-flash"><strong>{flashMsg}</strong></p>}
        <Form className="form">
          <FormGroup>
            <Label for="type">Name:</Label>
            <Input 
                name="name"
                type="text"
                placeholder="Company Name"
                value={formData.name}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Description:</Label>
            <Input name="description"
                type="text"
                placeholder="Company Description"
                value={formData.description}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Number of Employees:</Label>
            <Input name="numEmployees"
                type="text"
                placeholder="Number of Employees"
                value={formData.numEmployees}
                onChange={handleChange}
            />
          </FormGroup>
          {formData.numEmployees instanceof Number ? null : <p><span className="CompanyForm-error">NumEmployees must be a number!</span></p>}

        <Button type="submit" onClick={handleSubmit}>Submit</Button>
      </Form>
        </div>
    )
}

export default CompanyForm;