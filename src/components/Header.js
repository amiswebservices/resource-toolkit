import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <>
    <Navbar className="justify-content-center py-2" style={{background: '#206604 !important', fontWeight: 'bold'}}>
      <Navbar.Brand href="/" className="text-center" style={{textWrap: 'balance'}}>INCLUSIVE EMPOWERMENT & EMPLOYMENT<br /><h6 className='mb-0'>Transition Toolkit for Individuals with Intellectual and Physical Disabilities</h6></Navbar.Brand>
    </Navbar>
    <Navbar collapseOnSelect className="bg-body-tertiary" expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand href="/" className="b">TOOLKIT</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto"/>
          <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
          <Nav className="mx-auto">
            <NavLink className='mx-2 text-decoration-none text-white' to="/">Home</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/about">About</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/unt-resources-for-neuro-divergent">UNT Resources for Neuro Divergent</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/advocacy-and-support-organizations">Advocacy & Support Organizations</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/educational-and-informational">Educational Resources</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/employment-career-development">Employment Resources</NavLink>
            <NavLink className='mx-2 text-decoration-none text-white' to="/career-research">Career Research</NavLink>
            <NavLink className='ml-2 text-decoration-none text-white' to="/assessments">Assessments</NavLink>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;