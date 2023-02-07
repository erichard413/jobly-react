import React, {useState} from 'react';
import './ProfileForm.css';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

const ProfileForm = ({user}) => {
    const [formData, setFormData] = useState({
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
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
        alert(`Unable to edit details for user ${user.username}. Not functionable yet.`)
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
            <Input name="first_name"
                type="text"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Last Name:</Label>
            <Input name="last_name"
                type="text"
                placeholder="Last Name"
                value={formData.last_name}
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