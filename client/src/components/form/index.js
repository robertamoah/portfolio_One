import React, { Component } from "react";
import API from "../../utils/API";
import { Form, Input, TextArea, Button, Message } from "semantic-ui-react";

class Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email: "",
      opinion: "",
      message: {},
      isclick: false
    };
    this.handleFirst = this.handleFirst.bind(this);
    this.handleLast = this.handleLast.bind(this);
    this.handleOpinion = this.handleOpinion.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleFirst(e) {
    this.setState({ first: e.target.value });
  }

  handleLast(e) {
    this.setState({ last: e.target.value });
  }

  handleEmail(e) {
    this.setState({ email: e.target.value });
  }

  handleOpinion(e) {
    this.setState({ opinion: e.target.value });
  }

  submitForm(e) {
    e.preventDefault();
    API.info(this.state, callback => {
      this.setState({ message: callback.data });
      console.log(this.state.message);
    });
    if (this.state.isclick === false) {
      this.setState({
        isclick: true
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <Form success onSubmit={this.submitForm}>
          {this.state.isclick ? (
            <Message
              success
              header="Form Completed"
              content={this.state.message}
            />
          ) : null}
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              value={this.state.first}
              onChange={this.handleFirst}
              label="First name"
              placeholder="First name"
              required
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              value={this.state.last}
              onChange={this.handleLast}
              label="Last name"
              placeholder="Last name"
              required
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Opinion"
            value={this.state.opinion}
            onChange={this.handleOpinion}
            placeholder="Opinion"
            required
          />
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
            value={this.state.email}
            onChange={this.handleEmail}
            required
          />
          <Form.Field
            id="form-button-control-public"
            type="submit"
            control={Button}
            content="Confirm"
            label=""
            color="blue"
          />
        </Form>
      </React.Fragment>
    );
  }
}

export default Form1;
