import Container from 'react-bootstrap/Container';

function NotFound(){
    return (
        <Container>
            <div className='notFoundTitleHolder'>
                <h1 className='notFoundTitle'>404</h1>
                <h4 className='notFoundSubtitle'>Oops! Page not found.</h4>
            </div>
        </Container>
    )
};

export default NotFound;