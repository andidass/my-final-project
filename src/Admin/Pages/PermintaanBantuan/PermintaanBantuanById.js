import React, { Fragment, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import TabelData from "./TabelData";
import { getDataPermintaanById } from "../../../actions/permintaanBantuan";
import Spinner from "../../../Components/Spinner";
import { Button, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import HomeIcon from "@material-ui/icons/Home";

// import "./DataPosko.css";

const PermintaanBantuanById = ({
  match,
  getDataPermintaanById,
  permintaanBantuan: { permintaanBantuan, loading },
  auth: { user },
}) => {
  useEffect(() => {
    getDataPermintaanById(match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!user) {
  //   return <Redirect to="/admin/dashboard" />;
  // }

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <div className="sub-heading">
        <Typography variant="h5">
          {permintaanBantuan && permintaanBantuan.user.name}
        </Typography>
        <Typography variant="subtitle2">
          Data Permintaan Bantuan{" "}
          {permintaanBantuan && permintaanBantuan.user.name}
        </Typography>
      </div>
      <Button
        variant="outlined"
        size="small"
        startIcon={<ArrowBackIosIcon />}
        style={{ margin: 8 }}
      >
        {!user ? (
          <Link to="/permintaan-bantuan">Kembali</Link>
        ) : (
          <Link to="/admin/permintaan-bantuan">Kembali</Link>
        )}
      </Button>
      <div className="data-posko">
        {/* {permintaanBantuan && (
          <Button
            variant="contained"
            size="small"
            color="primary"
            startIcon={<HomeIcon />}
            style={{ margin: 8 }}
          >
            <Link
              to={`/admin/data-pos/${permintaanBantuan.user._id}`}
              style={{ color: "white" }}
            >
              Cek Profil Pos
            </Link>
          </Button>
        )} */}
        {permintaanBantuan &&
          (permintaanBantuan.dataPermintaanBantuan.length === 0 ? (
            <Typography variant="subtitle1">
              Pos Tidak Memiliki Permintaan Bantuan
            </Typography>
          ) : (
            <TabelData
              rows={
                permintaanBantuan && permintaanBantuan.dataPermintaanBantuan
              }
            />
          ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  permintaanBantuan: state.permintaanBantuan,
  auth: state.auth,
});

PermintaanBantuanById.propTypes = {
  getDataPermintaanById: PropTypes.func.isRequired,
  permintaanBantuan: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { getDataPermintaanById })(
  PermintaanBantuanById
);
