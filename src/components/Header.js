import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect className="bg-body-tertiary" expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/" className="b">TOOLKIT</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="ml-auto">
            <NavLink className='mx-2 text-decoration-none text-white' to="/">Home</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/educational-resources">Educational Resources</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/employment-resources">Employment Resources</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/research-and-articles">Research and Articles</NavLink>
            <NavLink className='ml-2 text-decoration-none text-white' to="/other-resources">Other Resources</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;