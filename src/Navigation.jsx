import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Form,
  Button,
  Nav,
  FormControl,
  NavDropdown,
} from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar  variant="dark" expand="lg" style={{backgroundColor:"#162950"}}>
          <Navbar.Brand href="#home">Demo CXDeployer</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Airline" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Move left</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Move Right
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Move Left
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Delete
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation;
