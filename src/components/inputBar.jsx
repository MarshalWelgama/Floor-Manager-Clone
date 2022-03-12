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

  render() {
    var name;
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
                  name="tester"
                />
              </Form.Field>
              <Form.Field>
                <label>Best Contact Number</label>
                <Form.Input placeholder="Phone Number" value={name} />
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
                  onClick={() => this.onSubmitDetails(name, "0400000000")}
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
