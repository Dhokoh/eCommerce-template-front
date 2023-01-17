import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavbarFooter() {
    return (
        <>
            <Navbar className='footerNavbar' expand="lg" variant="light" bg="light dark" fixed='bottom'>
                <Container className='navbarFooterContainer justify-content-center'>
                    <Navbar.Brand className='footerBrand'>eCommerce5_front</Navbar.Brand>
                    <Navbar.Text className='footerText'>All rights reserved</Navbar.Text>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarFooter;