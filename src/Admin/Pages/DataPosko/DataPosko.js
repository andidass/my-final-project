import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const DataPosko = ({
  profile: {
    user: { _id, name },
    petugas,
    location,
    alamatPosko,
    kecPosko,
    kelPosko,
    allPetugas,
  },
}) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {alamatPosko}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" size="small">
            <Link to={`/admin/data-posko/${_id}`}>Posko Detail</Link>
          </Button>
        </CardActions>
      </Card>
    </Fragment>
  );
};

DataPosko.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default DataPosko;
