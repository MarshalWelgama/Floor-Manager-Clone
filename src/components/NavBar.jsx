import React, { Component } from "react";
import "./css/NavBar.css";
import { Button, Checkbox, Form } from "semantic-ui-react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

class NavBar extends Component {
  state = {
    openModal: false,
  };
  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  onSubmitDetails = (text) => {
    this.props.onAdd(text);
    this.onCloseModal();
  };

  render() {
    return (
      <div className="parentDiv">
        <div className="navi">
          <a href="#">Emergency Floor Manager</a>
          <Button onClick={this.onClickButton}>+</Button>
          <Modal open={this.state.openModal} onClose={this.onCloseModal}>
            <Form>
              <Form.Field>
                <label>Who and Why?</label>
                <input placeholder="Customers Name and Reason" />
              </Form.Field>
              <Form.Field>
                <label>Best Contact Number</label>
                <input placeholder="Phone Number" />
              </Form.Field>
              <Button
                onClick={() => this.onSubmitDetails("test")}
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default NavBar;
