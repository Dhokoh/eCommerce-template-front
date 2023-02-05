import { Button, FormGroup } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

function Login(){
    return (
        <Container className='carouselContainer justify-content-center'>
            <div className='titleFormSeparator'></div>
            <h2 className='loginTitle'>Login</h2>
            <div className='titleFormSeparator'></div>
            <Form>
                <FormGroup>
                    <Form.Label className='formLabel'>
                        Email
                    </Form.Label>
                    <Form.Control className='loginPageInput' type='email' placeholder='Enter your email'/>
                    <Form.Text className='text-muted'>
                        <p className='emailFieldParagraph'>*We will never share your passwords with anyone else nor will we ask you about them.</p>
                    </Form.Text>
                </FormGroup>
                <FormGroup controlId='formBasicPassword'>
                    <Form.Label className='formLabel'>Password</Form.Label>
                    <Form.Control className='loginPageInput' type='password' placeholder='Password'></Form.Control>
                </FormGroup>
                <Button type='submit' className='loginButton'>
                    Log in
                </Button>
                <h6 className='loginTitle'>Don't have an account? <a className='formSignupLink' href='/signup'>Sign up!</a></h6>
            </Form>
        </Container>
    )
};

export default Login;