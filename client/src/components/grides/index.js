import React from "react";
import { Grid, Image } from "semantic-ui-react";

const Grid1 = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
      <Grid.Column width={13}>
        {/* <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" /> */}
        <h2>
          Created an app that Lets employees Login, Clock-in, set breaks,
          lunch-time, clock-outs, set appointments, and sets up reminders on
          their Daily goals board. Also for employers to see all their employee
          status.
        </h2>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
      </Grid.Column>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
      </Grid.Column>
      <Grid.Column width={13}>
        {/* <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" /> */}
        <h3>
          Created an app that Lets employees Login, Clock-in, set breaks,
          lunch-time, clock-outs, set appointments, and sets up reminders on
          their Daily goals board. Also for employers to see all their employee
          status.
        </h3>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Grid1;
