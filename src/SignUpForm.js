import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import JoblyApi from './api';
import {useAuth} from './hooks/useAuth';
import {useUser} from './hooks/useUser';
import jwt_decode from 'jwt-decode';
import './SignUpForm';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

const SignUpForm =()=>{
    const navigate = useNavigate();
    const [formError, setFormError] = useState({})
    const {setCurrentUser} = useUser();
    const {setCurrentToken} = useAuth();

    const initialState = {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        }
    const [formData, setFormData] = useState(initialState)
    // returns false if form not complete, true when form is completed
    const isComplete = () => {
        let res;
        Object.values(formData).map(data => data === "" ? res = false : null);
        if (res === false) {
            return false;
        }
        if (formData.username.length < 2 || formData.username.length > 30)  {
          return false;
        }
        if (formData.password.length < 5 || formData.password.length > 20)  {
          return false;
        }
        if (formData.firstName.length < 2 || formData.firstName.length > 30) {
          return false;
        }
        if (formData.lastName.length < 2 || formData.lastName.length > 30) {
          return false;
        }
        if (!formData.email.includes('@' || !formData.email.includes('.'))) {
          return false;
        }
        return true;
    }
    

    const handleChange = (e) => {
            const {name, value} = e.target;
            setFormData(data => ({
                ...data,
                [name] : value
            }))
        }
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const signMeUp = async() => {
          let res = await JoblyApi.signUp(formData);
          setCurrentUser(jwt_decode(res.token));
          setCurrentToken(res.token);
          JoblyApi.token = res.token;
          localStorage.setItem('token', res.token);
          setFormData(initialState);
          navigate('/home', {replace: true});
        }
        signMeUp().catch(err=> setFormError({...formError, ['duplicateusername'] : `Username ${formData.username} is taken, please choose another`}))
 
        }
    return (
        <div className="SignUpForm">
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
          {formData.username.length > 30 ? <span className="SignUpForm-error">Username cannot exceed 30 characters!</span> : null}
          {formError.duplicateusername && <span className="SignUpForm-error">{formError.duplicateusername}</span>}
          </FormGroup>
          <FormGroup>
            <Label for="type">Password:</Label>
            <Input name="password"
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
          </FormGroup>
          {formData.password.length > 20 ? <span className="SignUpForm-error">Password cannot exceed 20 characters!</span> : null}
          {formData.password.length < 5 && formData.password.length > 0 ? <span className="SignUpForm-error">Password must be at least 5 characters!</span> : null}
          <FormGroup>
            <Label for="type">First Name:</Label>
            <Input name="firstName"
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
            />
          </FormGroup>
          {formData.firstName.length > 30 ? <span className="SignUpForm-error">First name cannot exceed 30 characters!</span> : null}
          <FormGroup>
            <Label for="type">Last Name:</Label>
            <Input name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
            />
          </FormGroup>
          {formData.lastName.length > 30 ? <span className="SignUpForm-error">Last name cannot exceed 30 characters!</span> : null}
          <FormGroup>
            <Label for="type">Email:</Label>
            <Input name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
            />
            {formData.email.length > 6 && (!formData.email.includes('@') || !formData.email.includes('.')) ? <span className="SignUpForm-error">Email must be a valid email address!</span> : null }
          </FormGroup>
          
            {isComplete() ? <Button onClick={handleSubmit} >Submit</Button> : <Button onClick={handleSubmit} disabled >Submit</Button> }
        
      </Form>
        </div>
    
    )
}

export default SignUpForm;