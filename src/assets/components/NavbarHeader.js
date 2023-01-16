import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function NavbarHeader() {
  return (
    <>
    <Container className='topNavbarContainer justify-content-center'>
      <Navbar className='navHeader' bg='light' expand='lg' fixed='top'>
        <Navbar.Brand className='brand' href='/eCommerce5_front'>eCommerce5_front</Navbar.Brand>
        <Nav.Link className='navHeaderLink' id='headerHome'>Home</Nav.Link>
        <Nav.Link className='navHeaderLink' id='headerProducts'>Products</Nav.Link>
        <Nav.Link className='navHeaderLink' id='headerLogin'>Login</Nav.Link>
        <Form className='topSearchbar' action=''>
          <Form.Label className='topSearchbarLabel' for='searchProdBar'>Looking for something?</Form.Label>
          <input type='text' id='searchProdBar'></input>
          <Button className='searchButton' variant="secondary">Search</Button>
        </Form>

      </Navbar>
    </Container>
    </>
  );
}

export default NavbarHeader;