import React from "react";
import { Progress } from "semantic-ui-react";
import styled from "styled-components";
const Styles = styled.div``;

const ChartsPagePro = () => (
  <React.Fragment>
    <Styles>
      JavaScript <Progress percent={75} success></Progress>
      React <Progress percent={70} success></Progress>
      JQuery<Progress percent={50} success></Progress>
      Html<Progress percent={90} success></Progress>
      Css <Progress percent={90} success></Progress>
      Node.js<Progress percent={80} success></Progress>
      MySql<Progress percent={80} success></Progress>
      Mongo Db<Progress percent={70} success></Progress>
      Git/Github<Progress percent={80} success></Progress>
      Firebase<Progress percent={60} success></Progress>
      Java<Progress percent={50} success></Progress>
      <hr />
    </Styles>
  </React.Fragment>
);

export default ChartsPagePro;
