import React, {useState} from 'react';
import './ProfileForm.css';
import JoblyApi from './api';
import {useUser} from './hooks/useUser';

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

const ProfileForm = ({user}) => {
    const {currentUser, setCurrentUser} = useUser();

    const [formData, setFormData] = useState({
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
      e.preventDefault();
        const editUser = async() => {
        await JoblyApi.editUser(formData);
        }
        editUser();
        setCurrentUser(data => ({
          ...data,
          firstName : formData.firstName,
          lastName : formData.lastName,
          email : formData.email
        }))
    }

    return (
        <div className="ProfileForm">
        <Form className="form">
          <FormGroup>
            <Label for="type">Username:</Label>
            <Input 
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                readOnly
                disabled
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">First Name:</Label>
            <Input name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Last Name:</Label>
            <Input name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Email:</Label>
            <Input name="email"
                type="text"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
          </FormGroup>

        <Button onClick={handleSubmit}>Save Changes</Button>
      </Form>
        </div>
    )
}

export default ProfileForm;