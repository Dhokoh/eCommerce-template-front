import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useState, useEffect } from 'react';

function CBDointments() {
    const [productData, setProductData] = useState([]);
    const url = 'https://ecommerce5.onrender.com/products';
    //const [url, setUrl] = useState('https://ecommerce5.onrender.com/products');
    const allProducts = async () => {
        const res = await axios.get(url);
        setProductData(res.data);
    }

    useEffect(() => {
        allProducts();
    });

    return (
        <Container onLoad={allProducts} className='productGridContainer'>
            <Row className='productRow'>
                <Col className='productCol'>
                    {productData.map((item) => {
                        return (
                            <Card style={{ width: '15rem', margin: '15px' }}>
                                <Card.Img variant='top' src={item.image} alt='card image goes here'></Card.Img>
                                <Card.Body className='cardBody'>
                                    <Card.Title>{item.name}</Card.Title>
                                    <Card.Text>{item.reference}</Card.Text>
                                    <Card.Text>{"$" + item.price}</Card.Text>
                                    <Button className='cardButton'>Add to cart</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default CBDointments;