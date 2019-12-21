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
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src={tron3} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark"> See my Work</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm>
                <Card>
                  <Card.Img variant="top" src={tron9} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="dark">Go somewhere</Button>
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
