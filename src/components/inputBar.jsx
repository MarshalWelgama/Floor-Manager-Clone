import React, { Component } from "react";
import { Form, Button, Icon } from "semantic-ui-react";
import "./css/customModal.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

const footerStyle = {
  backgroundColor: "#fdfdfd",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "15px",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
  display: "grid",
  //   placeItems: "center",
};

class TextInput extends Component {
  state = {
    openModal: false,
    name: "",
    number: "",
  };
  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  onSubmitDetails = (information, number) => {
    this.props.onAdd(information, number);
    this.onCloseModal();
  };
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleSubmit = () => {
    console.log("hi");
    const { name, number } = this.state;
    this.props.onAdd(name, number);
    this.onCloseModal();
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <div style={footerStyle}>
          <Button onClick={this.onClickButton}>+</Button>
          <Modal
            open={this.state.openModal}
            onClose={this.onCloseModal}
            center
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
          >
            <Form>
              <Form.Field>
                <label>Who and Why?</label>
                <Form.Input
                  placeholder="Customers Name and Reason"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field>
                <label>Best Contact Number</label>
                <Form.Input
                  placeholder="Phone Number"
                  value={this.state.number}
                  name="number"
                  onChange={this.handleChange}
                />
              </Form.Field>
              <Form.Field
                style={{
                  textAlign: "center",
                }}
              >
                <Button
                  id="submitButton"
                  style={{
                    background: "#bd6691",
                    color: "white",
                    "margin-top": "5px",
                  }}
                  content="Add To Queue"
                  labelPosition="right"
                  icon="plus"
                  onClick={this.handleSubmit}
                />
              </Form.Field>
            </Form>
          </Modal>
        </div>
      </div>
    );
  }
}

export default TextInput;
