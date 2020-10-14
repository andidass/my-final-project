import React, { Fragment } from "react";
import spinner from "./spinner.gif";
import CircularProgress from "@material-ui/core/CircularProgress";

export default () => (
  <div className="full-height">
    {/* <CircularProgress /> */}
    <img
      src={spinner}
      style={{
        width: "100px",
        height: "100px",
        margin: "auto",
        display: "block",
      }}
      alt="loading..."
    />
  </div>
);
