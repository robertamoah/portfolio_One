import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";

const Styles = styled.div`
  #b-footer {
    width: 100%;
    height: 290px;
    background-color: #2d3748;
    color: white;
    opacity: 0.9;
    // background-color: transparent;
  }
`;

function FooterMain() {
  return (
    <React.Fragment>
      <Styles>
        <footer id="b-footer" className="text-center">
          <Container>
            <Row>
              <Col>
                Social Media
                <br />
                <br />
                <Button color="instagram">
                  <Icon name="instagram" /> Instagram
                </Button>
                <br />
                <br />
                <Button color="white">
                  <Icon name="git" /> GitHub
                </Button>
              </Col>
              <Col>
                Contact
                <br />
                <br />
                <br />
                <Button href="/contact" color="green">
                  <Icon name="info" /> Contact Info
                </Button>
              </Col>
              <Col>
                Privacy
                <br />
                <Button href="/projects" color="blue">
                  <Icon name="book" /> Projects
                </Button>
              </Col>
            </Row>
            <br />
            <p className="footer-text">
              &copy; {new Date().getFullYear()} City App - All Rights Reserved
              <hr />
              Questions? Call
              <a href="tel:973-441-0071"> 973-441-0071 </a>
              <br />
              Cite by Robert Ricky Pittman
            </p>
          </Container>
        </footer>
      </Styles>
    </React.Fragment>
  );
}

export default FooterMain;
