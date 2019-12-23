import _ from "lodash";
import React, { Component, createRef } from "react";
import { Grid, Image, Ref, Segment, Button, Icon } from "semantic-ui-react";

const Placeholder = () => (
  <Image src="https://previews.dropbox.com/p/thumb/AAoE_TMnPYhcjAINljFdvKw9EzyjFHlwY73txyQEPQH4rOxiyugCZRMBcJyi7UPWicJ4Sfs8MUT96781AU3Ucix6IQDtz-_ZK4qcv6P1w7Tm2bwYxz7DW4ZP0flW7jV_nplDjLMuBJ0HWCJkfG8W4y0U-uAe7jpo9RNtIjTaDOFvgKMRE3i_fy8vJ5igEB5BMUGC2-gMDrQfj4Ck_1mqujMKfH_4Q_nL06i6X2GgCRCYN7cU3MO5LbAnI_xxQz3RD0EeU9K0SORzzqNNuK76ALLetT0nhLCgMiW5ax_zSSl9p9_uv29Bi8tIeUVveDApzJDo4JtkYUYUh6XgOXhx8Jlof-tV6NSy0UGCvsxvisoalw/p.jpeg?fv_content=true&size_mode=5" />
);

export default class Gride2 extends Component {
  state = {};
  contextRef = createRef();

  render() {
    return (
      <React.Fragment>
        <Grid centered columns={1}>
          <Grid.Column>
            <Ref innerRef={this.contextRef}>
              <Segment>
                {_.times(1, i => (
                  <Placeholder key={i} />
                ))}
              </Segment>
            </Ref>
          </Grid.Column>
        </Grid>
        <br />
        <Button animated>
          <Button.Content visible>Press</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
        Open a PDF{" "}
        <a href="https://www.dropbox.com/home/Memories/images?preview=Resume_word+nov_2019.docx">
          <Button color="red">
            <Icon name="download" />
            Download
          </Button>
        </a>
      </React.Fragment>
    );
  }
}
// export default Gride2;
