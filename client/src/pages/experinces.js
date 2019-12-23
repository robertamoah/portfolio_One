import React, { Component } from "react";
import ChartsPagePro from "../components/chart1/index";
class Experiences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="center1">Experiences</h1>
        <ChartsPagePro />
      </React.Fragment>
    );
  }
}

export default Experiences;
