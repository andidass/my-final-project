import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPengungsi } from "../../../actions/pengungsi";
import { Button, Typography, Box } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Spinner from "../../../Components/Spinner";

const NoPengungsi = ({
  pengungsi: { pengungsi, loading },
  auth: { user },
  createPengungsi,
  history,
}) => {
  const onSubmit = (e) => {
    createPengungsi(history);
    e.preventDefault();
  };

  if (pengungsi) {
    return <Redirect to="/pos/data-pengungsi" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="full-height isi">
      <Typography variant="h5">
        <Box fontSize={12} textAlign="left" marginTop={3}>
          Data pengungsi pos ini belum ada.
        </Box>
      </Typography>
      <Button
        variant="contained"
        onClick={(e) => onSubmit(e)}
        color="primary"
        size="small"
        disableRipple
        component={Link}
        to="/pos/data-pengungsi/"
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
  pengungsi: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  pengungsi: state.pengungsi,
});

export default connect(mapStateToProps, { createPengungsi })(
  withRouter(NoPengungsi)
);
