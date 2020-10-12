import React, { Fragment } from "react";
import { Button, Typography } from "@material-ui/core";

const Profile = () => {
  return (
    <div style={{ margin: "auto", color: "red" }}>
      <Typography variant="subtitle1" gutterBottom>
        Anda belum memiliki profile
      </Typography>
      <Button variant="outlined">Buat Profile</Button>
    </div>
  );
};

export default Profile;
