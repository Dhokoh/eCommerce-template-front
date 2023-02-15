import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {LinkContainer} from 'react-router-bootstrap';

function NavbarHeader() {
  return (
    <>

      <Navbar className='navHeader justify-content-center' bg='light' expand='lg' >
        <Navbar.Brand className='brand' href='/'>Canna-eShop</Navbar.Brand>
        <LinkContainer to="/">
          <Nav.Link className='navHeaderLink' id='headerHome'>Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/products'>
          <Nav.Link className='navHeaderLink' id='headerProducts'>Products</Nav.Link>
        </LinkContainer>
        <LinkContainer to='/login'>
          <Nav.Link className='navHeaderLink' id='headerLogin'>Login</Nav.Link>
        </LinkContainer>
        <Form className='topSearchbar' action=''>
          <Form.Label className='topSearchbarLabel' for='searchProdBar'>Looking for something?</Form.Label>
          <input type='text' id='searchProdBar'></input>
          <Button className='searchButton' variant="primary">Search</Button>
        </Form>
      </Navbar>
    </>
  );
}

export default NavbarHeader;