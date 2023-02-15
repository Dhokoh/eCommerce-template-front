import { Button, FormGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import {LinkContainer} from 'react-router-bootstrap';

function Login() {

    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({
            ...values, [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('https://ecommerce5.onrender.com/users', inputs).then((res) => {
            console.log(res);
        })
    }


    return (
        <Container className='carouselContainer justify-content-center'>
            <div className='titleFormSeparator'></div>
            <h2 className='loginTitle'>Login</h2>
            <div className='titleFormSeparator'></div>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Label className='formLabel'>
                        Email
                    </Form.Label>
                    <Form.Control name='email' onChange={handleChange} className='loginPageInput' type='email' placeholder='Enter your email' />
                    <Form.Text className='text-muted'>
                        <p className='emailFieldParagraph'>*We will never share your passwords with anyone else nor will we ask you about them.</p>
                    </Form.Text>
                </FormGroup>
                <FormGroup controlId='formBasicPassword'>
                    <Form.Label className='formLabel'>Password</Form.Label>
                    <Form.Control name='password' onChange={handleChange} className='loginPageInput' type='password' placeholder='Password'></Form.Control>
                </FormGroup>
                <Button type='submit' className='loginButton'>
                    Log in
                </Button>
                <LinkContainer to='/signup'>
                    <h6 className='loginTitle'>Don't have an account? <a className='formSignupLink' href='/signup'>Sign up!</a></h6>
                </LinkContainer>
            </Form>
        </Container>
    )
};

export default Login;