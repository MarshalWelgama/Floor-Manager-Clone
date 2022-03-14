import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";

// A simple component that shows the pathname of the current location
class landingPage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  render() {
    const { match, location, history } = this.props;

    return (
      <div className="landing-page">
        <div></div>
        <div className="actions">
          <Button
            className="login-button"
            onClick={() => {
              history.push("/floor/aslkjdna/.[;0l./");
            }}
          >
            Create New
          </Button>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder="Enter Session Id"
                name="name"
                onChange={this.handleChange}
              />
              <Form.Button content="Join" color="blue" />
            </Form.Group>
          </Form>
        </div>
      </div>
    );
  }
}

export default landingPage;
