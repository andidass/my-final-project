import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import MenuPetugas from "../Components/MenuPetugas";
import { loadUser } from "../../actions/authPetugas";
import Alert from "../../layout/Alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Components/Spinner";
import { Typography, Box } from "@material-ui/core";

const MainPetugas = ({
  auth: { user, isAuthenticated, loading },
  profile: { profile },
  loadUser,
}) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/petugas/login" />;
  }

  if (user && user.session !== "petugas") {
    return <Redirect to="/not-authorized" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="full-height">
      <Alert />
      <Typography component="div">
        <Box
          textAlign="center"
          fontSize={20}
          fontWeight="fontWeightBold"
          marginTop={4}
          color="red"
        >
          Welcome {user && user.name}
        </Box>
      </Typography>
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
