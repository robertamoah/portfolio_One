import React, { Component } from "react";
import API from "../../utils/API";
import { Form, Input, TextArea, Button } from "semantic-ui-react";

import { Alert, Container } from "reactstrap";

const MainMessage = (props) => {
  // console.log(props);

  if (props.message) {
    return (
      <Alert
        style={{ textAlign: "center", margin: "0 auto" }}
        color={props.message.status === 200 ? "success" : "danger"}
      >
        {props.message.message}
      </Alert>
    );
  }
};

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      opinion: "",
      message: {},
      isclick: false,
    };
  }

  submitForm(e) {
    e.preventDefault();

    API.info(this.state, (callback) => {
      this.setState({ message: callback.data }, () => {
        if (this.state.message.status === 200) {
          this.setState(
            {
              firstName: "",
              lastName: "",
              email: "",
              opinion: "",
            },
            () => setTimeout(() => this.setState({ isclick: false }), 3500)
          );
        }
      });
    });

    if (this.state.isclick === false || true) {
      this.setState({
        isclick: true,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Form success>
            {this.state.isclick ? (
              <MainMessage message={this.state.message} />
            ) : null}

            <hr />

            <Form.Group widths="equal">
              <Form.Field
                id="form-input-control-first-name"
                control={Input}
                value={this.state.firstName}
                onChange={(e) => this.setState({ firstName: e.target.value })}
                label="First name"
                placeholder="First name"
                // required
              />
              <Form.Field
                id="form-input-control-last-name"
                control={Input}
                value={this.state.lastName}
                onChange={(e) => this.setState({ lastName: e.target.value })}
                label="Last name"
                placeholder="Last name"
                // required
              />
            </Form.Group>

            <Form.Field
              id="form-textarea-control-opinion"
              control={TextArea}
              label="Opinion"
              value={this.state.opinion}
              onChange={(e) => this.setState({ opinion: e.target.value })}
              placeholder="Opinion"
              // required
            />
            <Form.Field
              id="form-input-control-error-email"
              control={Input}
              label="Email"
              placeholder="joe@schmoe.com"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              required
            />

            <Form.Field
              id="form-button-control-public"
              type="submit"
              control={Button}
              content="Confirm"
              label=""
              color="blue"
              onClick={this.submitForm.bind(this)}
            />
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

export default Form1;
