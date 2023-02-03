import Container from 'react-bootstrap/Container';
import { Row, Col, Card } from 'react-bootstrap';

function Products(){
    return (
        <Container>
            <h1 className='productsPageTitle'>Our products</h1>
            <Row className='productsRow'>
                <Col className='colLabel'>
                    <Card className='productCardTitle'>
                        <Card.Img src={require('../assets/images/cbdoilsandextractsthumbnail.jpg')}></Card.Img>
                        <Card.Body>
                            <Card.Title className='cardTitle'><a className='productLink' href='./products/cbd-oils-and-extracts'>CBD Oils and extracts</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='colLabel'>
                    <Card className='productCardTitle'>
                        <Card.Img src={require('../assets/images/thcediblesthumbnail.jpg')}></Card.Img>
                        <Card.Body>
                            <Card.Title className='cardTitle'><a className='productLink' href='/products/thc-edibles'>THC edibles</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className='colLabel'>
                    <Card className='productCardTitle'>
                        <Card.Img src={require('../assets/images/cbdointmentsthumbnail.jpg')}></Card.Img>
                        <Card.Body>
                            <Card.Title className='cardTitle'><a className='productLink' href='/products/cbd-ointments'>CBD ointments</a></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Products;