import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
const API_URL = process.env.REACT_APP_API_URL;
// A simple component that shows the pathname of the current location
class landingPage extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
  uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };
  onCreateNew = async () => {
    const newGuid = this.uuidv4();
    //this.props.history.push(`${this.uuidv4()}`);
    const { status, request, data } = await axios.post(
      `${API_URL}/api/session`,
      {
        guid: newGuid,
      }
    );
    if (status == 200) {
      console.log(data);
      this.props.history.push(`${newGuid}`);
    }
  };

  onJoin = (id) => {
    this.props.history.push(`${id}`);
  };

  handleInputChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = () => {
    const { name } = this.state;
    this.props.history.push(`${name}`);
  };

  render() {
    const { match, location, history } = this.props;

    return (
      <div className="landing-page">
        <div></div>
        <div className="actions">
          <Button className="login-button" onClick={this.onCreateNew}>
            Create New
          </Button>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder="Enter Session Id"
                name="name"
                onChange={this.handleInputChange}
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
