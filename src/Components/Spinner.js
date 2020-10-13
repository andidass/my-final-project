import React, { Fragment } from "react";
import spinner from "./spinner.gif";

export default () => (
  <Fragment>
    <div className="full-height">
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
  </Fragment>
);
