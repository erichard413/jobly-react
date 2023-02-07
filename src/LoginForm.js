import React, {useState} from 'react';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

const LoginForm = () => {
    const initialState = {
        username: "",
        password: "",
    }
    const [formData, setFormData] = useState(initialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(data => ({
            ...data,
            [name] : value
        }))
    }

    const handleSubmit = (e) => {
        alert(`Cannot log in user ${formData.username}, functionality has not been implemented yet!`)
        setFormData(initialState);
    }

    return (
        <div className="LoginForm">
        <Form className="form">
          <FormGroup>
            <Label for="type">Username:</Label>
            <Input 
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="type">Password:</Label>
            <Input name="password"
                type="text"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
          </FormGroup>

        <Button onClick={handleSubmit}>Login</Button>
      </Form>
        </div>
    )
}

export default LoginForm;