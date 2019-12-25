import React, { Component } from "react";
import CardMain from "../components/card/index";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <hr />
        <hr />
        <CardMain />
        <hr />
        <hr />
        <br />
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

export default Dashboard;
