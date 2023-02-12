import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
  } from 'reactstrap';

const LoginForm = ({login}) => {
    const initialFlash = ""
    const [flashMsg, setFlashMsg] = useState(initialFlash);

    const navigate = useNavigate();
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
      e.preventDefault();
      const doLogin = async()=>{
        let res = await login(formData.username, formData.password)
        if (res) {
          navigate('/', {replace:true})
        }
        if (!res) {
          setFlashMsg('Invalid username/password combo!');
          setTimeout(()=> {setFlashMsg(initialFlash)}, 2500)
        }
      }
      doLogin();
    }
      

    return (
        <div className="LoginForm">
        {flashMsg && <p className="LoginForm-flash"><strong>{flashMsg}</strong></p>}
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
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
            />
          </FormGroup>

        <Button type="submit" onClick={handleSubmit}>Login</Button>
      </Form>
        </div>
    )
}

export default LoginForm;