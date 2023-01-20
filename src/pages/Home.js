// import Container from "react-bootstrap/Container";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


function Home(){
    return (
        <Container>
            <h1 className='carouselTitle'>All your favourite products in one place</h1>
            <Carousel>
                <Carousel.Item>
                    <img src='.../public/images/cdbproduct.jpg' className='carouselElement'></img>
                </Carousel.Item>
                <Carousel.Caption>
                    <h3></h3>
                </Carousel.Caption>
            </Carousel>
        </Container>
    );
}

export default Home;