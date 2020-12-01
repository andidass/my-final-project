import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import MenuAdmin from "../Components/MenuAdmin";

import { getBantuanUtama } from "../../actions/setBantuanUtama";
// import { getCurrentProfile } from "../../actions/profile";
// import { getDataFasilitasPosko } from "../../actions/fasilitasPosko";
// import { getPengungsi } from "../../actions/pengungsi";
// import { getPermintaanBantuan } from "../../actions/permintaanBantuan";
// import { getBantuanMasuk } from "../../actions/bantuanMasuk";
import { loadUser } from "../../actions/authAdmin";
import Alert from "../../layout/Alert";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../../Components/Spinner";
import { Typography, Box } from "@material-ui/core";

const MainAdmin = ({
  auth: { user, isAuthenticated, loading },
  loadUser,
  getBantuanUtama,
}) => {
  useEffect(() => {
    loadUser();
    getBantuanUtama();
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
          welcome {user && user.name}
        </Box>
      </Typography>
      <MenuAdmin />
    </div>
  );
};

MainAdmin.propTypes = {
  loadUser: PropTypes.func.isRequired,
  getBantuanUtama: PropTypes.func.isRequired,
  //   getCurrentProfile: PropTypes.func.isRequired,
  //   getDataFasilitasPosko: PropTypes.func.isRequired,
  //   getPengungsi: PropTypes.func.isRequired,
  //   getBantuanMasuk: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  //   profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  //   profile: state.profile,
});

export default connect(mapStateToProps, {
  loadUser,
  getBantuanUtama,
  //   getCurrentProfile,
  //   getDataFasilitasPosko,
  //   getPengungsi,
  //   getPermintaanBantuan,
  //   getBantuanMasuk,
})(MainAdmin);
