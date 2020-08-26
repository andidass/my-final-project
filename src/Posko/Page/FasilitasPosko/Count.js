import React from "react";
import { TextField } from "@material-ui/core";
import MyButton from "./MyButton";

const Count = (props) => {
  const decreaseValue = () => {
    props.setCount(Math.max(props.count - 1, 0));
  };
  const increaseValue = () => {
    props.setCount(props.count + 1);
  };

  return (
    <MyButton decreaseValue={decreaseValue} increaseValue={increaseValue}>
      {props.children}
      <TextField
        id="rumah-sakit"
        value={props.count}
        style={{ margin: 8, maxWidth: 50 }}
        margin="normal"
        variant="outlined"
        size="small"
      />
    </MyButton>
    // {/* <MyButton
    //             decreaseValue={decreaseValue2}
    //             increaseValue={increaseValue2}
    //           >
    //             MCK : {count2}
    //           </MyButton> */}
  );
};

export default Count;
