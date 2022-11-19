import React, { Component } from "react";
import { Button } from 'baseui/button';
import "./css/customModal.css";
import "react-responsive-modal/styles.css";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalButton,
} from 'baseui/modal';

import {
  ThemeProvider,
  createTheme,
  lightThemePrimitives
} from "baseui";
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';

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

const InputBar = ({ onSubmit }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [information, setInformation] = React.useState("");

  function close() {
    setIsOpen(false);
  }

  function submitAndClose() {
    onSubmit(information, number)
    setInformation("")
    setNumber("")
    setIsOpen(false);
  }

  return (
    <div style={footerStyle}>

      <React.Fragment>
        <ThemeProvider
          theme={createTheme(lightThemePrimitives, {
            colors: {
              buttonPrimaryFill: "#d4d4d4",
              buttonPrimaryHover: "#EEEEEE",
              buttonPrimaryText: "black",
            }
          })}
        >
          <Button onClick={() => setIsOpen(true)}
          >Add to queue</Button>
        </ThemeProvider>
        <Modal onClose={close} isOpen={isOpen}>
          <ModalHeader>Customer Details</ModalHeader>
          <ModalBody>
            <FormControl label="Name & Reason" caption="Include time if neccesary">
              <Input
                value={information}
                onChange={e => setInformation(e.target.value)}
                clearOnEscape
              />
            </FormControl>
            <FormControl label="Contact Number">
              <Input
                value={number}
                onChange={e => setNumber(e.target.value)}
                clearOnEscape />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <ModalButton kind="tertiary" onClick={close}>
              Cancel
            </ModalButton>
            <ModalButton onClick={submitAndClose}>Okay</ModalButton>
          </ModalFooter>
        </Modal>
      </React.Fragment>

    </div>
  )

}
// class TextInput extends Component {
//   state = {
//     openModal: false,
//     name: "",
//     number: "",
//   };
//   onClickButton = (e) => {
//     e.preventDefault();
//     this.setState({ openModal: true });
//   };

//   onCloseModal = () => {
//     this.setState({ openModal: false });
//   };

//   onSubmitDetails = (information, number) => {
//     this.props.onAdd(information, number);
//     this.onCloseModal();
//   };
//   handleChange = (e, { name, value }) => this.setState({ [name]: value });
//   handleSubmit = () => {
//     console.log("hi");
//     const { name, number } = this.state;
//     this.props.onAdd(name, number);
//     this.onCloseModal();
//     this.setState({ name: "", number: "" });
//   };

//   render() {
//     return (
//       <div>
//         <div style={footerStyle}>
//           <Button onClick={this.onClickButton}>+</Button>
//           <Modal
//             open={this.state.openModal}
//             onClose={this.onCloseModal}
//             center
//             classNames={{
//               overlay: "customOverlay",
//               modal: "customModal",
//             }}
//           >
//             <Form>
//               <Form.Field>
//                 <label>Who and Why?</label>
//                 <Form.Input
//                   placeholder="Customers Name and Reason"
//                   name="name"
//                   value={this.state.name}
//                   onChange={this.handleChange}
//                 />
//               </Form.Field>
//               <Form.Field>
//                 <label>Best Contact Number</label>
//                 <Form.Input
//                   placeholder="Phone Number"
//                   value={this.state.number}
//                   name="number"
//                   onChange={this.handleChange}
//                 />
//               </Form.Field>
//               <Form.Field
//                 style={{
//                   textAlign: "center",
//                 }}
//               >
//                 <Button
//                   id="submitButton"
//                   style={{
//                     background: "#bd6691",
//                     color: "white",
//                     "margin-top": "5px",
//                   }}
//                   content="Add To Queue"
//                   labelPosition="right"
//                   icon="plus"
//                   onClick={this.handleSubmit}
//                 />
//               </Form.Field>
//             </Form>
//           </Modal>
//         </div>
//       </div>
//     );
//   }
// }

export default InputBar;
