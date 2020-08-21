import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import styled from "styled-components";
const Styles = styled.div`
  .navbar {
    background-color: #001f3f;
  }
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;
    &:hover {
      color: white;
    }
  }
`;

class NavBarMain extends Component {
  render() {
    return (
      <React.Fragment>
        <Styles>
          <Navbar expand="sm">
            <Navbar.Brand>Robert Pittman</Navbar.Brand>
            <Navbar.Toggle arial-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="/#"></Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Styles>
      </React.Fragment>
    );
  }
}

export default NavBarMain;
