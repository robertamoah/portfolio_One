import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="center1">About</h1>

        <Container>
          <Row className="justify-content-md-center">
            <Col sm={7} md={{ span: 4, offset: 0 }}>
              <img
                style={{ width: 300, height: 350 }}
                src="https://images.immediate.co.uk/production/volatile/sites/3/2018/05/HUMANS302CH092002292-copy-7791fa1.jpg?webp=true&quality=90&resize=620%2C413"
              />
            </Col>
            <Col sm={5}>
              <br />
              <h4>
                I am a Full Stack Web Developer with experience as a Full Mern
                Application Dev, educated at Passaic County Community College
                and Rutgers Coding Bootcamp. Skills in REACT.js, HTML, CSS,
                JQuery, JavaScript, Git/Github, ECMA Scripts, Redis for Data
                Chaching, Mongo-db and Mysql, Passionate about approaching
                programming challenges from different angles and collaborating
                with others to create meaningful web applications. I am a Full
                Stack Web Developer with experience as a Full Mern Application
                Dev, educated at Passaic County Community College and Rutgers
                Coding Bootcamp. Skills in REACT.js, HTML, CSS, JQuery,
                JavaScript, Git/Github, ECMA Scripts, Redis for Data Chaching,
                Mongo-db and Mysql, Passionate about approaching programming
                challenges from different angles and collaborating with others
                to create meaningful web applications.
              </h4>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>
                I am a Full Stack Web Developer with experience as a Full Mern
                Application Dev, educated at Passaic County Community College
                and Rutgers Coding Bootcamp. Skills in REACT.js, HTML, CSS,
                JQuery, JavaScript, Git/Github, ECMA Scripts, Redis for Data
                Chaching, Mongo-db and Mysql, Passionate about approaching
                programming challenges from different angles and collaborating
                with others to create meaningful web applications.
              </h3>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>
                I am a Full Stack Web Developer with experience as a Full Mern
                Application Dev, educated at Passaic County Community College
                and Rutgers Coding Bootcamp. Skills in REACT.js, HTML, CSS,
                JQuery, JavaScript, Git/Github, ECMA Scripts, Redis for Data
                Chaching, Mongo-db and Mysql, Passionate about approaching
                programming challenges from different angles and collaborating
                with others to create meaningful web applications.
              </h3>
            </Col>
          </Row>
        </Container>
        <br />
      </React.Fragment>
    );
  }
}

export default About;
