import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png"

function BasicExample() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home" ><img src={logo} style={{width:"140px"}} className=" mr-16"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-3xl font-black font-mono" >
            <Nav.Link href="home" className="mr-16">Home</Nav.Link>
            <Nav.Link href="delivery" className="mr-16">Delivery</Nav.Link>

            <Nav.Link href="appoint" className="mr-16">Appoint</Nav.Link>

            <Nav.Link href="schedule" className="mr-16">Schedule</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;