import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import CircularProgress from "@material-ui/core/CircularProgress";

export default () => (
  <div style={{ display: "grid", height: `95vh` }}>
    {/* <CircularProgress /> */}
    <img
      src={spinner}
      style={{
        width: "120px",
        height: "120px",
        margin: "auto",
        display: "grid",
      }}
      alt="loading..."
    />
  </div>
);
