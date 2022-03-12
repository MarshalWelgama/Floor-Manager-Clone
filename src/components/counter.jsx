import React, { Component } from "react";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import "./css/counter.css";
import { Form, Button, Segment, Statistic } from "semantic-ui-react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeNow: this.props.counter.time,
      openModal: false,
    };
  }

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  render() {
    let timeElapsed = moment(this.props.timeExac).diff(
      this.state.timeNow,
      "minutes"
    );
    return (
      <Segment
        pilled
        padded
        size="huge"
        style={{
          margin: "4px 4px 0px",
        }}
        className="cardWhole"
      >
        <Modal
          open={this.state.openModal}
          onClose={this.onCloseModal}
          center
          classNames={{
            overlay: "customViewOverlay",
            modal: "customViewModal",
          }}
        >
          <Form>
            <Form.Field>
              <label
                style={{
                  textAlign: "center",
                }}
              >
                Name & Reason
              </label>
              <Segment
                style={{
                  "font-size": "2rem",
                }}
              >
                {this.props.counter.information}
              </Segment>
            </Form.Field>
            <Form.Field>
              <label
                style={{
                  textAlign: "center",
                }}
              >
                Contact Number
              </label>
              <Segment
                style={{
                  "font-size": "2rem",
                }}
              >
                {this.props.counter.number}
              </Segment>
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
                content="Remove"
                labelPosition="left"
                icon="remove user"
                onClick={() => this.props.onDelete(this.props.counter._id)}
              />
              <Button
                id="submitButton"
                style={{
                  background: "rgb(135 134 134)",
                  color: "white",
                  "margin-top": "5px",
                }}
                content="Edit"
                labelPosition="right"
                icon="edit"
              />
            </Form.Field>
          </Form>
        </Modal>

        <div className="timeBox">
          {timeElapsed ? (
            <React.Fragment>
              {" "}
              <Statistic.Value>{timeElapsed}</Statistic.Value>{" "}
              <Statistic.Label>Minutes</Statistic.Label>{" "}
            </React.Fragment>
          ) : (
            <Statistic.Label className="timeBox">Just Now</Statistic.Label>
          )}
        </div>
        <div className="divider"></div>
        <span className="badge bg-primary"></span>

        <span className="informationText">
          {this.props.counter.information}
        </span>

        <Button
          floated="right"
          onClick={this.onClickButton}

          // size="big"
        >
          View
        </Button>
      </Segment>
    );
  }
}

export default Counter;
