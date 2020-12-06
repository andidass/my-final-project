import { Button } from "@material-ui/core";
import React from "react";

const Coba = () => {
  const klik = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(callback, null, {
      timeout: 10000,
    });
    function callback(position) {
      //   console.log(position);
      console.log(position.coords.latitude, position.coords.longitude);
    }
  };

  return <Button onClick={(e) => klik(e)}>klik</Button>;
};
export default Coba;
