import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useStyletron } from 'baseui';
import { Form } from "semantic-ui-react";
import { Button, SIZE } from "baseui/button";
import {
  DisplayLarge,
  DisplayMedium,
  DisplaySmall,
  DisplayXSmall,
} from 'baseui/typography';

import { Input } from "baseui/input";
import { Helmet } from "react-helmet";
const API_URL = process.env.REACT_APP_API_URL;
// A simple component that shows the pathname of the current location
const LandingPage = (props) => {

  const [value, setValue] = React.useState("");
  const [css, theme] = useStyletron();

  const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  };

  const onCreateNew = async () => {
    const newGuid = uuidv4();
    //this.props.history.push(`${this.uuidv4()}`);
    const { status, request, data } = await axios.post(
      `${API_URL}/api/session`,
      {
        guid: newGuid,
      }
    );
    if (status == 200) {
      props.history.push(`/${newGuid}`);
    }
  };

  return (
    <div className="landing-page">
      <Helmet>
        <meta name="theme-color" content="#fcfcfc" />
      </Helmet>
      <div>
        <div>
          <DisplayLarge marginBottom="scale500">
            {"KjuMi"}
          </DisplayLarge>
        </div>
        <div className="actions">
          <Button
            onClick={() => onCreateNew()}
            size={SIZE.large}
            overrides={{
              Root: {
                style: {
                  width: '80%',
                },
              },
            }}
          >
            Create New
          </Button>
          <div style={{ "display": "flex", "justifyContent": "center" }}>
            <Input

              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Session ID"
              overrides={{
                Root: {
                  style: {
                    width: "60%",
                    marginRight: theme.sizing.scale400,
                  },
                },
              }}
            />
            <Button
              onClick={() => console.log('hi')}

            >
              Go
            </Button>
          </div>
        </div>
      </div>



    </div>

  );
}

export default LandingPage;
