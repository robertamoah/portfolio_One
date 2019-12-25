import React from "react";
import { Grid, Image, Button, Icon } from "semantic-ui-react";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
const Grid1 = () => (
  <Grid celled>
    <Grid.Row>
      <Grid.Column width={10}>
        <h3>
          {/* <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" /> */}
          Bucket Besties Add items to your bucket list and stay on track by
          assigning a due date. Find others with the same interests in your area
          to make new friends. Technologies: JavaScript, Handlebars, Bootstrap,
          JQuery, JQuery datetimepicker, MySQL, Express, Node.js, Nodemailer,
          Google Geocode API, Firebase Authentication Users add activities to
          their bucket list that they wish to accomplish. The top ten items for
          all users are listed by most common. The Google Geocoder API is used
          to locate nearby users with the same interests. By utilizing the
          Nodemailer package, users with similar interests may be contacted. The
          user may mark the activity as completed and a list of completed
          activities is kept to show progress.
        </h3>
        <Button
          color="blue"
          href="https://evening-badlands-89202.herokuapp.com/"
        >
          <Icon name="book" />
          See Work
        </Button>
      </Grid.Column>
      <Grid.Column width={5}>
        <Image src={image2} />
        <Image src={image1} />
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={10}>
        {/* <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" /> */}
        <h3>
          {" "}
          Created an app that Lets employees Login, Clock-in, set breaks,
          lunch-time, clock-outs, set appointments, and sets up reminders on
          their Daily goals board. Also for employers to see all their employee
          status. By utilizing the Nodemailer package, users could get emails
          after setting appointments and also as records of mettings. Also a
          Working calender to view all and make new daily agenders, which users
          will then be remindered when close.
        </h3>
        <Button
          color="blue"
          name="work"
          href="https://time-stamp.herokuapp.com/"
        >
          <Icon name="book" /> See Work
        </Button>
      </Grid.Column>

      <Grid.Column width={5}>
        <Image src={image3} />
        <Image src={image4} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Grid1;
