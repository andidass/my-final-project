import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import MenuAdmin from "../Components/MenuAdmin";
import { loadUser } from "../../actions/authAdmin";
import Alert from "../../layout/Alert";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../Components/Spinner";
import { Typography, Paper } from "@material-ui/core";

const MainAdmin = ({ auth: { user, token, loading }, loadUser }) => {
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!token) {
    return <Redirect to="/admin/login" />;
  }

  if (user && user.session !== "admin") {
    return <Redirect to="/not-authorized" />;
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="full-height">
      <Alert />
      <Paper
        variant="outlined"
        style={{ margin: `5%`, width: "90%", backgroundColor: "#F4F6F6" }}
      >
        <div style={{ margin: `2%` }}>
          <Typography variant="h6">
            Hallo, Anda masuk sebagai admin<b> {user && user.name} </b>
          </Typography>
          <Typography variant="subtitle1">
            Selalu lakukan update berkala data terkini,
          </Typography>
          <Typography variant="subtitle1">
            Selamat bekerja, admin <b>{user && user.name}</b>
          </Typography>
        </div>
      </Paper>
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
