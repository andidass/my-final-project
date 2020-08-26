import React from "react";
import { Typography, Box, Button, ButtonGroup } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const MyButton = (props) => {
  return (
    <ButtonGroup style={{ width: "100%" }}>
      <Typography component="div" style={{ margin: 8 }}>
        <Box fontSize={18} display="inline">
          {props.children}
        </Box>
      </Typography>
      <div style={{ margin: 8 }}>
        <Button
          size="small"
          aria-label="reduce"
          onClick={props.decreaseValue}
          variant="outlined"
        >
          <RemoveIcon fontSize="small" />
        </Button>
        <Button
          size="small"
          aria-label="increase"
          onClick={props.increaseValue}
          variant="outlined"
        >
          <AddIcon fontSize="small" />
        </Button>
      </div>
    </ButtonGroup>
  );
};

export default MyButton;
