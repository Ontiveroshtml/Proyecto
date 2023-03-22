import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';
import imge from './imagen3.png';

function Barra() {
  return (
    <motion.div className='barra'
    initial={{x:500 }}
      animate={{ x:0}}
      transition={{ duration:.2 }}
      >

      <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Brand as={Link} to='/'>
            <img
              alt=""
              src={imge}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
         <Nav.Link as={Link} to='/' > Inicio</Nav.Link>
         <Nav.Link as={Link} to='/login' > Login</Nav.Link>
         <Nav.Link as={Link} to='/logout' > Cerrar sesion</Nav.Link>
          <Nav.Link as={Link} to='/UTD'>UTD</Nav.Link>
         <Nav.Link as={Link} to='/Logo' > Logo</Nav.Link>
          <Nav.Link as={Link} to='/carrera'>Carrera</Nav.Link>
          <Nav.Link as={Link} to='/galeria'>Carrusel</Nav.Link>
          <Nav.Link as={Link} to='/mapa' > Ubicacion</Nav.Link>
          <Nav.Link as={Link} to='/Nombre' > Nombre</Nav.Link>
          <Nav.Link as={Link} to='Foto' > Foto</Nav.Link>
          <Nav.Link as={Link} to='/CV' > Curriculum</Nav.Link>
          <Nav.Link as={Link} to='/Fblogin' > FB Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    

    </motion.div>

  );
}

export default Barra;