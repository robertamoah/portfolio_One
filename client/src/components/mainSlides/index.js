import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.css";
class Slides extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <img
          className="d-block w-70"
          src="https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif"
          alt="Third slide"
        />

        <img
          className="d-block w-70"
          src="https://media.giphy.com/media/4UkuYLbv8qi2I/giphy.gif"
          alt="Third slide"
        />

        <img
          className="d-block w-70"
          src="https://media.giphy.com/media/1bV2mEHxnHFrq/giphy.gif"
          alt="Third slide"
        />

        <img
          className="d-block w-70"
          src="https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif"
          alt="Third slide"
        />

        <img
          className="d-block w-70"
          src="https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif"
          alt="Third slide"
        />

        <img
          className="d-block w-70"
          src="https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif"
          alt="Third slide"
        />
      </div>
    );
  }
}

export default Slides;
