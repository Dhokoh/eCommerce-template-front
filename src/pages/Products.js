import Container from 'react-bootstrap/Container';
import { Row, Col, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

function Products() {
    return (
        <Container>
            <h1 className='productsPageTitle'>Our products</h1>
            <Row className='productsRow'>
                <Col className='colLabel'>
                    <Card style={{ width: '18rem' }} className='productCardTitle'>
                        <Card.Img src={require('../assets/images/cbdoilsandextractsthumbnail.jpg')}></Card.Img>
                        <Card.Body>
                            <LinkContainer to='/products/cbd-oils-and-extracts'>
                                <Card.Title className='cardTitle'><a className='productLink' href='/products/cbd-oils-and-extracts'>CBD Oils and extracts</a></Card.Title>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='colLabel'>
                    <Card style={{ width: '18rem' }} className='productCardTitle'>
                        <Card.Img src={require('../assets/images/thcediblesthumbnail.jpg')}></Card.Img>
                        <Card.Body>
                            <LinkContainer to='/products/thc-edibles'>
                                <Card.Title className='cardTitle'><a className='productLink' href='/products/thc-edibles'>THC edibles</a></Card.Title>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='colLabel'>
                    <Card style={{ width: '18rem' }} className='productCardTitle'>
                        <Card.Img src={require('../assets/images/cbdointmentsthumbnail.jpg')}></Card.Img>
                        <Card.Body>
                            <LinkContainer to='/products/cbd-ointments'>
                                <Card.Title className='cardTitle'><a className='productLink' href='/products/cbd-ointments'>CBD ointments</a></Card.Title>
                            </LinkContainer>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Products;