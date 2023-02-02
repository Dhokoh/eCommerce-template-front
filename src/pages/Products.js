import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

function Products(){
    return (
        <Container>
            <h1 className='productsPageTitle'>Our products</h1>
            <Row>
                <Col className='colLabel'>CBD Oils and extracts</Col>
                <Col className='colLabel'>THC edibles</Col>
                <Col className='colLabel'>CBD ointments</Col>
            </Row>
        </Container>
    )
}

export default Products;