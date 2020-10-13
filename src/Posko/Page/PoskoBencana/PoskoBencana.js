import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DataPosko from "./DataPosko";
import DataPetugas from "./DataPetugas";

import { Grid, Paper, Typography, Box } from "@material-ui/core";

import "./PoskoBencana.css";
const PoskoBencana = ({ auth: { user }, profile: { profile } }) => {
  return profile !== null ? (
    <Fragment>
      <div className="full-height">
        <Typography component="div">
          <Box
            fontSize={18}
            fontWeight="fontWeightBold"
            textAlign="center"
            marginTop={3}
          >
            Posko Bencana
          </Box>
        </Typography>
        <Paper variant="outlined" className="body-posko-bencana">
          <Grid container>
            <Grid xs={12} sm={6} item>
              <DataPosko />
            </Grid>
            <Grid xs={12} sm={6} item>
              <DataPetugas />
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Fragment>
  ) : (
    <Fragment>
      <div className="full-height">Profile tidak ada</div>
    </Fragment>
  );
};

PoskoBencana.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps)(PoskoBencana);
