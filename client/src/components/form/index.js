import React, { Component } from "react";
import API from "../../utils/API";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";

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
      this.setState({ message: callback.data });
      console.log(this.state.message);
    });
    if (this.state.isclick === false) {
      this.setState({
        isclick: true,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form success>
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
            // required
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
      </React.Fragment>
    );
  }
}

export default Form1;
