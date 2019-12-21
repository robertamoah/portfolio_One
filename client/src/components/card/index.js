import React, { Component } from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import tron9 from "../card/images/tron9.jpg";
import tron10 from "../card/images/tron10.jpg";
import tron3 from "../card/images/tron3.jpg";

const Styles = styled.div`
  .card {
    width: 18rem;
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.153) !important;
    border-radius: 55px;
    margin-top: 20px !important;
  }
  .one-1 {
    margin-left: 50px;
  }
  .card:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.353) !important;
  }
`;

class CardMain extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Styles>
          <Container>
            <Row>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src={tron10} />
                  <Card.Body>
                    <Card.Title> Experinces</Card.Title>
                    <Card.Text>
                      My main focus is not to make all my works Functional but
                      also Responsive
                    </Card.Text>
                    <Button
                      href="/experinces"
                      className="one-1"
                      variant="outline-secondary"
                    >
                      Skills
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src={tron3} />
                  <Card.Body>
                    <Card.Title>Projects</Card.Title>
                    <Card.Text>
                      Creating Application are not just a hobby but, wanting to
                      make Life easier for everyone.
                    </Card.Text>
                    <Button
                      href="/projects"
                      className="one-1"
                      variant="primary"
                    >
                      See Projects
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src={tron9} />
                  <Card.Body>
                    <Card.Title>Summary</Card.Title>
                    <Card.Text>
                      Here is a Summary of My experinces and commitments, I
                      believe a good employee sticks out like a sore thumb
                    </Card.Text>
                    <Button
                      href="/resume"
                      className="one-1"
                      variant="outline-secondary"
                    >
                      Resume
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Styles>
      </React.Fragment>
    );
  }
}

export default CardMain;
