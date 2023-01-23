// import Container from "react-bootstrap/Container";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
    return (
        <Container className='carouselContainer justify-content-center'>
            <h1 className='carouselTitle'>All products in one place</h1>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../assets/images/cdbproduct.jpg')}
                        alt="Health and wellness"
                    />
                    <Carousel.Caption>
                        <h3>Health and wellness</h3>
                        <p>From farmaceuticals to homeopathic medicine. Everything for your health and wellbeing.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src={require('../assets/images/clothinghomegoods.jpg')}
                        alt="Clothing and home goods"
                    />

                    <Carousel.Caption>
                        <h3>Clothing and home</h3>
                        <p>From high quality clothing, to high quality home goods</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={require('../assets/images/technologyproducts.jpg')}
                        alt="Technology and gaming"
                    />

                    <Carousel.Caption>
                        <h3>Technology and gaming</h3>
                        <p>
                            State of the art technology and gaming products.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            {/* <Carousel>
                <Carousel.Item className='carouselItem'>
                    <img src={require('../assets/images/cdbproduct.jpg')} alt='Medicinal products' href=''></img>
                    <Carousel.Caption>
                        <h4>Medical homeopathic products</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='carouselItem'>
                    <img src={require('../assets/images/cdbproduct.jpg')} alt='Medicinal products' href=''></img>
                    <Carousel.Caption>
                        <h4>Medical homeopathic products</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> */}
        </Container>
    );
}

export default Home;