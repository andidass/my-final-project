import React from "react";

import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles({
  icon: {
    textAlign: "center",
  },
  root: {
    minWidth: 150,
  },
});

function CardMenu() {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent className={classes.icon}>
        <LockOutlinedIcon />
        <Typography variant="body2" component="p">
          Posko Bencana
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardMenu;
