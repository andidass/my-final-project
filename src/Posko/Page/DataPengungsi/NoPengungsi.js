import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPengungsi, getPengungsi } from "../../../actions/pengungsi";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const NoPengungsi = ({ pengungsi, auth: { user } }) => {
  const onSubmit = (e) => {
    createPengungsi();
    e.preventDefault();
  };
  useEffect(() => {
    getPengungsi();
  }, [getPengungsi]);

  return (
    <div className="full-height isi">
      <Typography variant="h5">
        <Box fontSize={12} textAlign="left" marginTop={3}>
          Data pengungsi posko ini belum ada.
        </Box>
      </Typography>
      <Button
        variant="contained"
        onClick={(e) => onSubmit(e)}
        color="primary"
        size="small"
        disableRipple
        component={Link}
        to="/posko/data-pengungsi/"
        startIcon={<PersonIcon />}
      >
        Buat Data Pengungsi
      </Button>
    </div>
  );
};

NoPengungsi.propTypes = {
  auth: PropTypes.object.isRequired,
  createPengungsi: PropTypes.func.isRequired,
  getPengungsi: PropTypes.func.isRequired,
  pengungsi: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps, { createPengungsi, getPengungsi })(
  withRouter(NoPengungsi)
);
