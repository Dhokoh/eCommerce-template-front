// import Container from "react-bootstrap/Container";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
    return (
        <Container className='carouselContainer justify-content-center'>
            <h1 className='carouselTitle'>All products in one place</h1>
            <Carousel>
                <Carousel.Item className='carouselItem'>
                    <img src={require('../assets/images/cdbproduct.jpg')} style={width:''} className='carouselElement' alt='This should be the picture of a product category' href=''></img>
                    <Carousel.Caption>
                        <h4>Medical homeopathic products</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Home;