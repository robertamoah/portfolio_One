import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import FaBeer from "react-icons/lib/fa/beer";

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
                Follow me on
                <div>lorem{FaBeer}</div>
              </Col>
              <Col>
                Contact
                <br />
                <a href="/contact">Link</a>
              </Col>
              <Col>
                Privacy
                <div>lorem</div>
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
