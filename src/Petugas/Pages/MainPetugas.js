import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import MenuPetugas from "../Components/MenuPetugas";
import { loadUser } from "../../actions/authPetugas";
import Alert from "../../layout/Alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Components/Spinner";
import { Typography, Box, Paper } from "@material-ui/core";

const MainPetugas = ({
  auth: { user, isAuthenticated, loading },
  profile: { profile },
  loadUser,
}) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!user) {
    return <Redirect to="/petugas/login" />;
  }

  if (user && user.session !== "petugas") {
    return <Redirect to="/not-authorized" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="full-height">
      <Paper
        variant="outlined"
        style={{ margin: `5%`, width: "90%", backgroundColor: "#F4F6F6" }}
      >
        <div style={{ margin: `2%` }}>
          <Typography variant="h6">
            Hallo, Anda masuk dengan akun petugas<b> {user && user.name} </b>
          </Typography>
          <Typography variant="subtitle1">
            Selalu lakukan update berkala data terkini bencana
          </Typography>
          <Typography variant="subtitle1">
            Selamat bekerja {user && user.name}
          </Typography>
        </div>
      </Paper>
      <Alert />
      <MenuPetugas />
    </div>
  );
};

MainPetugas.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  loadUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  loadUser,
})(MainPetugas);
