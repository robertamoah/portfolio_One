import React, { Component } from "react";
import styled from "styled-components";
const Styles = styled.div`
  .wallpaper1 {
    background-color: #f7fafc;
  }

  body {
    font-family: "Alice", Helvetica, sans-serif;
  }

  .center1 {
    height: 3em;
    text-align: center;
  }
`;

class Wallpaper1 extends Component {
  state = {};
  render() {
    return (
      <Styles>
        <div className="wallpaper1">{this.props.children}</div>
      </Styles>
    );
  }
}

export default Wallpaper1;
