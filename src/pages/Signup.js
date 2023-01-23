import { Container } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

function Signup() {
    return(
        <Container className="signupContainer">
            <h2 className="signupTitle">We're happy to have you be a part of our community! Welcome!</h2>
            <p className="signupParagraph">At eCommerce5_front we take pride on our wide variety of products which we work hard
                to get to your screens. If we don't have it, we can get it. In order to be able to 
                check products, their prices and stock in our platform, as well as post product and seller
                reviews, you need to create an account.
            </p>
            <Container className='signupFormContainer'>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control className="signupFormTextField" type='text'></Form.Control>
                    </Form.Group>
                </Form>
                <h6 className="signupDisclosure">All the information marked with (*) is required.</h6>
            </Container>
        </Container>
    )
};

export default Signup;