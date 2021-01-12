import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import MenuAdmin from "../Components/MenuAdmin";
import { loadUser } from "../../actions/authAdmin";
import Alert from "../../layout/Alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Components/Spinner";
import { Typography, Box } from "@material-ui/core";

const MainAdmin = ({ auth: { user, isAuthenticated, loading }, loadUser }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/admin/login" />;
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
      <MenuAdmin />
    </div>
  );
};

MainAdmin.propTypes = {
  loadUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {
  loadUser,
})(MainAdmin);
