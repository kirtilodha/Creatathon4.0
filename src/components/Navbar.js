import React from "react";
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.png"
import "../App.css";

function BasicExample() {
  const [showModal, setShowModal] = React.useState(false);
  const [showModall, setShowModall] = React.useState(false);

  return (
    <div>
    <Navbar className="navbar-color">
      <Container>
        <Navbar.Brand href="#home" ><img src={logo} style={{width:"140px"}} className=" mr-16"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" me-auto text-3xl font-mono" >
            <Nav.Link href="" className="mr-16 text-white">Home</Nav.Link>
            <Nav.Link href="" onClick={() => setShowModal(!showModal)} className="mr-16 text-white">Delivery</Nav.Link>

            <Nav.Link href="" className="mr-16 text-white">Profile</Nav.Link>

            <Nav.Link href="" onClick={() => setShowModall(!showModall)} className="mr-16 text-white">Status</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {showModal && 
    <div class="modal-overlay" id="modal_window"
    aria-hidden={!showModal} role="dialog"
    aria-labelledby="modal_title">

<div class="modal-content" id="modal_holder" role="document">

 <h1 id="modal_title">Schedule</h1>
 <form>
   <label for="name">Source:</label>
   <input type="text" id="name" class="input" placeholder="Starting point" />

   <label for="email">Destination:</label>
   <input type="email" id="email" class="input" placeholder="Ending point" />

   <input onClick={()=> alert("Your form has been submitted!")} class='btn' value="Submit Form" />
 </form>

<button class="btn-close " id="modal_close" onClick={() => setShowModal(!showModal)}  type="button" aria-label="close">
 &times;
</button>

</div>

</div> 
}
{showModall && 
    <div class="modal-overlay" id="modal_window"
    aria-hidden={!showModall} role="dialog"
    aria-labelledby="modal_title">

<div class="modal-content" id="modal_holder" role="document">

 <h1 id="modal_title">Track your parcel</h1>
 <div className="google-map-code">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.2444061131414!2d77.5659113694713!3d12.909159606422032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156310100001%3A0x71be53da4480fbbe!2sDayananda%20Sagar%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1683747333947!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>

<button class="btn-close " id="modal_close" onClick={() => setShowModall(!showModall)}  type="button" aria-label="close">
 &times;
</button>

</div>
</div> 
}
    </div>
  );
}

export default BasicExample;