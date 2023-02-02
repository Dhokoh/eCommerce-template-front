import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

function NavbarHeader() {
  return (
    <>

      <Navbar className='navHeader justify-content-center' bg='light' expand='lg' >
        <Navbar.Brand className='brand' href='/eCommerce5_front'>Canna-eShop</Navbar.Brand>
        <Nav.Link className='navHeaderLink' id='headerHome' href='/'>Home</Nav.Link>
        <Nav.Link className='navHeaderLink' id='headerProducts' href='/products'>Products</Nav.Link>
        <Nav.Link className='navHeaderLink' id='headerLogin' href='/login'>Login</Nav.Link>
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