import React from "react";
import { Link } from "react-router-dom";

// import CardMenu from "./CardMenu";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import AssignmentIcon from "@material-ui/icons/Assignment";
import InputIcon from "@material-ui/icons/Input";
import AccessibleIcon from "@material-ui/icons/Accessible";
import HomeIcon from "@material-ui/icons/Home";
import PanToolIcon from "@material-ui/icons/PanTool";

const useStyles = makeStyles({
  icon: {
    textAlign: "center",
  },
  root: {
    minWidth: 150,
  },
  bodyMenuPosko: {
    marginTop: 50,
  },
  menuPosko: {
    padding: 10,
  },
});

function MenuPosko() {
  const classes = useStyles();
  return (
    <Grid container className={classes.bodyMenuPosko} spacing={3}>
      <Grid menu sm={3} />

      <Grid xs={4} sm={2} className={classes.menuPosko}>
        <Card
          className={classes.root}
          variant="outlined"
          component={Link}
          to="/posko/posko-bencana"
        >
          <CardContent className={classes.icon}>
            <HomeIcon />
            <Typography gutterBottom="true" variant="body2" component="p">
              Posko Bencana
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={4} sm={2} className={classes.menuPosko}>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.icon}>
            <AssignmentIcon />
            <Typography variant="body2" component="p">
              Data Bencana
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={4} sm={2} className={classes.menuPosko}>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.icon}>
            <AccessibleIcon />
            <Typography variant="body2" component="p">
              Data Korban
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid menu sm={3} />

      <Grid xs={4} sm={2} className={classes.menuPosko}>
        <Card
          className={classes.root}
          variant="outlined"
          component={Link}
          to="posko/bantuan-masuk"
        >
          <CardContent className={classes.icon}>
            <InputIcon />
            <Typography variant="body2" component="p">
              Bantuan Masuk
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={4} sm={2} className={classes.menuPosko}>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.icon}>
            <InputIcon reverse />
            <Typography variant="body2" component="p">
              Bantuan Keluar
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid xs={4} sm={2} className={classes.menuPosko}>
        <Card className={classes.root} variant="outlined">
          <CardContent className={classes.icon}>
            <PanToolIcon />
            <Typography variant="body2" component="p">
              Permintaan Bantuan
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid menu sm={3} />
    </Grid>
  );
}

export default MenuPosko;
