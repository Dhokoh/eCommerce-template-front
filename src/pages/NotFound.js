import Container from 'react-bootstrap/Container';

function NotFound(){
    return (
        <Container>
            <h1>Oops! Page not found.</h1>
            <img src={require('../assets/images/404notFound.jpg')}></img>
        </Container>
    )
};

export default NotFound;