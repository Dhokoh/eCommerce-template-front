// import Container from "react-bootstrap/Container";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';


function Home() {
    return (
        <Container className='carouselContainer justify-content-center'>
            <h2 className='carouselTitle'>Lots of cannabis products in one place!</h2>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src={require('../assets/images/cdbproduct.jpg')}
                        alt="Health and wellness"
                    />
                    <Carousel.Caption>
                        <h3>CBD oils and extracts</h3>
                        <p>For anxiety, trembles and sleeping disorders.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src={require('../assets/images/thcedibles.jpg')}
                        alt="CBD drops and oils"
                    />

                    <Carousel.Caption>
                        <h3>THC edibles</h3>
                        <p>For anxiety, apetite, muscular spasms and pain relief</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carouselImg"
                        src={require('../assets/images/cbdointments.jpg')}
                        alt="CBD infused ointments"
                    />

                    <Carousel.Caption>
                        <h3>CBD ointments</h3>
                        <p>
                           For muscular and articulation pain. 
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='homeLoginLink'>
                <h6>Have an account? <a href='/login'>Log in</a>.</h6>
            </div>
        </Container>
    );
}

export default Home;