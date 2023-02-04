import { Col, Container, Row, Button, Card } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import axios from "axios";


function Signup() {
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        debugger;
        axios.post('http://localhost:5000/users', inputs)
            .then((res) => {
                console.log('--------------------')
                console.log(res);
            })
    }
    return (
        <Container className="signupContainer">
            <h2 className="signupTitle">Welcome to join our community of clients!</h2>
            <p className="signupParagraph">At CannaeShop we have a variety of products for you, our users get special benefits like discounts and ahead-of-release purchases.
            </p>
            <Container className="signupCardHolder">
                <Card>
                    <Card.Body>
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
                                </Col>
                                <Col>
                                    <Form.Group className="signupFormRightSide">
                                        <Form.Label className='formLabel'>Lastname*</Form.Label>
                                        <Form.Control onChange={handleChange} name="lastname" className="signupFormTextField" type='text'></Form.Control>
                                    </Form.Group>
                                    <Form.Group className='signupFormRightSide' controlId="formBasicPassword">
                                        <Form.Label className='formLabel'>Password*</Form.Label>
                                        <Form.Control type='password' onChange={handleChange} name="password" className="signupFormTextField"></Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="signupButtonContainer">
                                <Button className="signupButton" type='submit'>Sign up</Button>
                                <h6 className="signupDisclosure">All the information marked with (*) is required.</h6>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </Container>
    )
};

export default Signup;