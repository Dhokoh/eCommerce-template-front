import { Col, Container, Row, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";


function Signup() {
    const [inputs, setInputs] = useState({}); 
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]:value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        axios.post('http://localhost:5000/users', inputs)
        .then((res)=>{
            console.log('--------------------')
            console.log(res);
        })
    }
    return (
        <Container className="signupContainer">
            <h2 className="signupTitle">We're happy to have you be a part of our community! Welcome!</h2>
            <p className="signupParagraph">At eCommerce5_front we take pride on our wide variety of products which we work hard
                to get to your screens. If we don't have it, we can get it. In order to be able to
                check products, their prices and stock in our platform, as well as post product and seller
                reviews, you need to create an account.
            </p>
            <Container className="">
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className='signupFormLeftSide'>
                                <Form.Label className='formLabel'>Name*</Form.Label>
                                <Form.Control onChange={handleChange} name="name" className="signupFormTextField" type='text'></Form.Control>
                            </Form.Group>
                            <Form.Group className='signupFormLeftSide'>
                                <Form.Label className='formLabel'>Email*</Form.Label>
                                <Form.Control onChange={handleChange} name="email" className="signupFormTextField" type='text'></Form.Control>
                            </Form.Group>
                            <Form.Group className="signupFormRightSide">
                                <Form.Label className='formLabel'>Country*</Form.Label>
                                <Form.Control onChange={handleChange} name="phoneNumber" className="signupFormTextField" type='text'></Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="signupFormRightSide">
                                <Form.Label className='formLabel'>Lastname*</Form.Label>
                                <Form.Control onChange={handleChange} name="lastname" className="signupFormTextField" type='text'></Form.Control>
                            </Form.Group>
                            <Form.Group className="signupFormRightSide">
                                <Form.Label className='formLabel'>Phone number</Form.Label>
                                <Form.Control onChange={handleChange} name="phoneNumber" className="signupFormTextField" type='text'></Form.Control>
                            </Form.Group>
                            <Form.Group className='signupFormLeftSide' controlId="formBasicPassword">
                                <Form.Label className='formLabel'>Password*</Form.Label>
                                <Form.Control type='password' onChange={handleChange} name="email" className="signupFormTextField"></Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <div className="signupButtonContainer">
                    <Button className="signupButton" type='submit'>Sign up</Button>
                </div>
                <h6 className="signupDisclosure">All the information marked with (*) is required.</h6>
            </Container>
            {/* <div className='signupFormDiv'>
                <Form className="signupForm">

                    <Form.Group className='signupFormLeftSide'>
                        <Form.Label>Name*</Form.Label>
                        <Form.Control className="signupFormTextField" type='text'></Form.Control>
                    </Form.Group>

                    <Form.Group className="signupFormRightSide">
                        <Form.Label>Lastname*</Form.Label>
                        <Form.Control className="signupFormTextField" type='text'></Form.Control>
                    </Form.Group>
                    <h6 className="signupDisclosure">All the information marked with (*) is required.</h6>
                </Form>
            </div> */}
        </Container>
    )
};

export default Signup;