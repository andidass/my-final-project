import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import MenuPosko from "../Components/MenuPosko";

import { loadUser } from "../../actions/auth";
import { getCurrentProfile } from "../../actions/profile";
import { getDataFasilitasPosko } from "../../actions/fasilitasPosko";
import { getPengungsi } from "../../actions/pengungsi";
import { getPermintaanBantuan } from "../../actions/permintaanBantuan";
import { getBantuanMasuk } from "../../actions/bantuanMasuk";
import Alert from "../../layout/Alert";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../../Components/Spinner";
import { Typography, Box } from "@material-ui/core";

const MainPosko = ({
  loadUser,
  getCurrentProfile,
  getPengungsi,
  getDataFasilitasPosko,
  getPermintaanBantuan,
  getBantuanMasuk,
  auth: { user, isAuthenticated },
  profile: { profile, loading },
}) => {
  useEffect(() => {
    loadUser();
    getCurrentProfile();
    getDataFasilitasPosko();
    getPengungsi();
    getPermintaanBantuan();
    getBantuanMasuk();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/posko/login" />;
  }
  return loading || user === null ? (
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
          welcome {user && user.name}
        </Box>
      </Typography>
      <MenuPosko />
    </div>
  );
};

MainPosko.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getDataFasilitasPosko: PropTypes.func.isRequired,
  getPengungsi: PropTypes.func.isRequired,
  getBantuanMasuk: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, {
  loadUser,
  getCurrentProfile,
  getDataFasilitasPosko,
  getPengungsi,
  getPermintaanBantuan,
  getBantuanMasuk,
})(MainPosko);
